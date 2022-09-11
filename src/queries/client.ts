import {
  ApolloClient,
  ApolloLink,
  from,
  fromPromise,
  HttpLink,
  InMemoryCache
}                       from '@apollo/client'
import { onError }      from '@apollo/client/link/error'
import { AbsolutePath } from '../other/PathConfig'
import {
  GLoginInput,
  GLoginMutationFn,
  GRenewTokenMutationFn,
  LoginDocument,
  RenewTokenDocument
}                       from '../other/generated'
import { toast }        from 'react-toastify'
import { IS_DEV }       from '../other/helpers'
import { store }        from '../store/store'
import { actionLogout } from '../store/globalActions'



export const Application = {
  async login( { email, password }: GLoginInput ) {
    const startFetch = (client.mutate as GLoginMutationFn)( { mutation: LoginDocument, variables: { user: { email, password } } } )
    const { data }   = await toast.promise( startFetch, {
      pending : 'Авторизация...',
      error   : 'Ошибка запроса авторизации',
    } )
    if ( !data?.login ) {
      toast.error( 'Ошибка в ответе запроса авторизации' )
      return
    }
    if ( data.login.message === 'Success' && data.login.accessToken && data.login.refreshToken ) {
      localStorage.setItem( 'AccessToken', data.login.accessToken )
      localStorage.setItem( 'RefreshToken', data.login.refreshToken )
      document.location.href = AbsolutePath.Root
    }
    else /*if ( data.login.message === 'Invalid Credentials' )*/ {
      toast.error( 'Неверные данные входа' )
    }
  },
  logout() {
    localStorage.removeItem( 'AccessToken' )
    localStorage.removeItem( 'RefreshToken' )
    void client.resetStore()
    store.dispatch( actionLogout() )
    document.location.href = AbsolutePath.Login
  },
  async renewToken(): Promise<string | void> {
    const accessToken  = localStorage.getItem( 'AccessToken' )
    const refreshToken = localStorage.getItem( 'RefreshToken' )
    if ( !accessToken || !refreshToken ) return
    const startFetch = (client.mutate as GRenewTokenMutationFn)( { mutation: RenewTokenDocument, variables: { tokens: { accessToken, refreshToken } } } )
    const { data }   = await toast.promise( startFetch, {
      pending : 'Обновление токена...',
      error   : 'Ошибка запроса обновления токена',
    } )
    if ( !data?.relogin.accessToken || !data.relogin.refreshToken ) {
      toast.error( 'Ошибка в ответе запроса обновления токена' )
      return
    }
    IS_DEV && toast.success( 'Рефреш токен обновлён!' )
    localStorage.setItem( 'AccessToken', data.relogin.accessToken )
    localStorage.setItem( 'RefreshToken', data.relogin.refreshToken )
    return data.relogin.accessToken
  },
}


const serverDomainLink = new HttpLink( { uri: 'https://localhost:7094' } )

const authMiddleware = new ApolloLink( ( operation, forward ) => {
  const token = localStorage.getItem( 'AccessToken' )
  operation.setContext( { headers: { authorization: token ? `Bearer ${token}` : '' } } )
  return forward( operation )
} )

let refreshPromise: ReturnType<typeof Application.renewToken> | undefined
const errorMiddleware = onError( ( { graphQLErrors, networkError, operation, forward } ) => {
  networkError && toast.error( `Ошибка: ${networkError}`, { autoClose: false } )
  if ( !graphQLErrors ) return
  for ( const err1 of graphQLErrors ) {
    if ( err1.extensions.code === 'AUTH_NOT_AUTHENTICATED' ) {
      return fromPromise(
        refreshPromise || (refreshPromise = Application
            .renewToken()
            .then( token => {
              refreshPromise = undefined
              return token
            } )
            .catch( error => Application.logout() ))
      )
          .filter( value => Boolean( value ) )
          .flatMap( token => {
            const oldHeaders = operation.getContext().headers
            operation.setContext( {
              headers : {
                ...oldHeaders,
                authorization : `Bearer ${token}`,
              },
            } )
            return forward( operation )
          } )
    }
  }
} )

export const client = new ApolloClient( {
  cache             : new InMemoryCache(),
  connectToDevTools : IS_DEV,
  link              : from( [
    errorMiddleware,
    authMiddleware,
    serverDomainLink
  ] ),
} )