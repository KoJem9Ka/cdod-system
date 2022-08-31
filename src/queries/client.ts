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
  LoginDocument
}                       from '../other/generated'
import { toast }        from 'react-toastify'
import { getJSON }      from '../other/helpers'


// Нужно доделать рефреш токен
export const Application = {
  async login( { email, password }: GLoginInput ) {
    const startFetch = (client.mutate as GLoginMutationFn)( { mutation: LoginDocument, variables: { user: { email, password } } } )

    const { data } = await toast.promise( startFetch, {
      pending: 'Авторизация...',
      error:   'Ошибка запроса авторизации',
    } )

    if ( !data?.login ) {
      toast.error( 'Ошибка запроса авторизации' )
      return
    }

    switch ( data.login ) {

    // case 'Not found':
    //   toast.error( 'Пользователь не найден' )
    //   return

    default:
      console.log( getJSON( data ) )
      // console.log( jwtObject )
      // const jwtObject = parseJwt( data.login )

      localStorage.setItem( 'Authorization', data.login.accessToken! )
      document.location.href = AbsolutePath.Root
    }

  },
  logout() {
    localStorage.removeItem( 'Authorization' )
    void client.resetStore()
    store.dispatch( actionLogout() )
    document.location.href = AbsolutePath.Login
  },
}

const serverDomainLink = new HttpLink( { uri: 'https://localhost:7094' } )

const authMiddleware = new ApolloLink( ( operation, forward ) => {
  const token = localStorage.getItem( 'Authorization' )
  operation.setContext( { headers: { authorization: token ? `Bearer ${token}` : '' } } )
  return forward( operation )
} )

const logoutLink = onError( ( { graphQLErrors, networkError } ) => {
  if ( !graphQLErrors ) return
  graphQLErrors.forEach( err => {
    console.error( 'graphQLError:', err )
    err.extensions.code === 'AUTH_NOT_AUTHENTICATED' && Application.logout()
  } )
  networkError && console.error( 'networkError:', networkError )
} )

export const client = new ApolloClient( {
  cache:             new InMemoryCache(),
  connectToDevTools: true,
  link:              from( [
    authMiddleware,
    logoutLink,
    serverDomainLink
  ] ),
} )