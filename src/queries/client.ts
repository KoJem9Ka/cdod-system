import { ApolloClient, ApolloLink, from, fromPromise, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { isEmpty, isNil } from 'lodash'
import { toast } from 'react-toastify'
import { GLoginInput, GLoginMutationFn, GRenewTokenMutationFn, LoginDocument, RenewTokenDocument } from '../other/generated'
import { IS_DEV } from '../other/helpers'
import { AbsolutePath } from '../other/PathConfig'
import { actionLogout } from '../store/globalActions'
import { store } from '../store/store'

export const Application = {
  async login({ email, password }: GLoginInput) {
    const startFetch = (client.mutate as GLoginMutationFn)({ mutation: LoginDocument, variables: { user: { email, password } } })
    const { data } = await toast.promise(startFetch, {
      pending : 'Авторизация...',
      error   : 'Ошибка запроса авторизации',
    })
    if (!data?.login) {
      toast.error('Ошибка в ответе запроса авторизации', { autoClose: false })
      return
    }
    if (data.login.message === 'Success' && data.login.accessToken && data.login.refreshToken) {
      localStorage.setItem('AccessToken', data.login.accessToken)
      localStorage.setItem('RefreshToken', data.login.refreshToken)
      document.location.href = AbsolutePath.Root
    }
    /*if ( data.login.message === 'Invalid Credentials' )*/ else {
      toast.error('Неверные данные входа')
    }
  },
  logout() {
    localStorage.removeItem('AccessToken')
    localStorage.removeItem('RefreshToken')
    void client.resetStore()
    store.dispatch(actionLogout())
    document.location.href = AbsolutePath.Login
  },
  async renewToken(): Promise<string | void> {
    const accessToken = localStorage.getItem('AccessToken')
    const refreshToken = localStorage.getItem('RefreshToken')
    if (!accessToken || !refreshToken) return
    const startFetch = (client.mutate as GRenewTokenMutationFn)({ mutation: RenewTokenDocument, variables: { tokens: { accessToken, refreshToken } } })
    const { data } = await toast.promise(startFetch, {
      pending : 'Обновление токена...',
      error   : 'Ошибка запроса обновления токена',
    })
    if (!data?.relogin.accessToken || !data.relogin.refreshToken) {
      toast.error('Ошибка в ответе запроса обновления токена', { autoClose: false })
      return
    }
    IS_DEV && toast.success('Рефреш токен обновлён!')
    localStorage.setItem('AccessToken', data.relogin.accessToken)
    localStorage.setItem('RefreshToken', data.relogin.refreshToken)
    return data.relogin.accessToken
  },
}

const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN || 'https://localhost:7094'
if (isEmpty(SERVER_DOMAIN) || isNil(SERVER_DOMAIN)) {
  console.error('REACT_APP_SERVER_DOMAIN is not defined')
  throw new Error('REACT_APP_SERVER_DOMAIN is not defined')
}
const serverDomainLink = new HttpLink({ uri: SERVER_DOMAIN })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('AccessToken')
  operation.setContext({ headers: { authorization: token ? `Bearer ${token}` : '' } })
  return forward(operation)
})

let refreshPromise: ReturnType<typeof Application.renewToken> | undefined
const errorMiddleware = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (networkError) {
    toast.error(`Ошибка: ${networkError}`, { autoClose: false })
    console.error(networkError, operation)
  }

  if (!graphQLErrors) return
  for (const err1 of graphQLErrors) {
    // eslint-disable-next-line
    if (err1?.extensions?.code === 'AUTH_NOT_AUTHENTICATED') {
      return fromPromise(
        refreshPromise ||
          (refreshPromise = Application.renewToken()
              .then(token => {
                refreshPromise = undefined
                return token
              })
              .catch(error => Application.logout()))
      )
          .filter(value => Boolean(value))
          .flatMap(token => {
            const oldHeaders = operation.getContext().headers
            operation.setContext({
              headers : {
                ...oldHeaders,
                authorization : `Bearer ${token}`,
              },
            })
            return forward(operation)
          })
    }
    else {
      console.warn(err1, operation)
    }
  }
})

export const client = new ApolloClient({
  cache             : new InMemoryCache(),
  connectToDevTools : IS_DEV,
  link              : from([ errorMiddleware, authMiddleware, serverDomainLink ]),
})
