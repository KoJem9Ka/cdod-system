import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache
}                       from '@apollo/client'
import { onError }      from '@apollo/client/link/error'
import { AbsolutePath } from '../other/PathConfig'
import { store }        from '../store/store'
import { actionLogout } from '../store/globalActions'
import {
  GLoginInput,
  GLoginMutationFn,
  GRenewTokenMutationFn,
  LoginDocument
}                       from '../other/generated'
import { toast }        from 'react-toastify'
import { IS_DEV }       from '../other/helpers'


//TODO: Нужно доделать рефреш токен
export const Application = {
  async login( { email, password }: GLoginInput ) {
    const startFetch = (client.mutate as GLoginMutationFn)( { mutation: LoginDocument, variables: { user: { email, password } } } )
    const { data } = await toast.promise( startFetch, { pending: 'Авторизация...', error: 'Ошибка запроса авторизации' } )
    if ( !data?.login ) {
      toast.error( 'Ошибка запроса авторизации' )
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
  async renewToken(): Promise<null | string> {
    const accessToken = localStorage.getItem( 'AccessToken' )
    const refreshToken = localStorage.getItem( 'RefreshToken' )
    if ( !accessToken || !refreshToken ) return null
    const startFetch = (client.mutate as GRenewTokenMutationFn)( { mutation: LoginDocument, variables: { tokens: { accessToken, refreshToken } } } )
    const { data } = await toast.promise( startFetch, { pending: 'Обновление токена...', error: 'Ошибка запроса обновления токена' } )
    if ( !data?.relogin.accessToken || !data.relogin.refreshToken ) {
      toast.error( 'Ошибка запроса обновления токена 123123' )
      return null
    }
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

const errorMiddleware = onError( ( { graphQLErrors, networkError, operation, forward } ) => {
  if ( !graphQLErrors ) return
  graphQLErrors.forEach( err => {
    console.error( 'graphQLError:', err )
    err.extensions.code === 'AUTH_NOT_AUTHENTICATED' && Application.renewToken().then( token => {
      if ( token === null ) return Application.logout()
      const oldHeaders = operation.getContext().headers
      operation.setContext( { headers: { ...oldHeaders, authorization: token ? `Bearer ${token}` : '' } } )
      return forward( operation )
    } ).catch( () => Application.logout() )
  } )
  networkError && console.error( 'networkError:', networkError )
} )

export const client = new ApolloClient( {
  cache:             new InMemoryCache(),
  connectToDevTools: IS_DEV,
  link:              from( [
    errorMiddleware,
    authMiddleware,
    serverDomainLink
  ] ),
} )