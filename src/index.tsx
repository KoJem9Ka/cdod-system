import './wdyr'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.scss'
import 'moment/locale/ru'
import React              from 'react'
import { createRoot }     from 'react-dom/client'
import App                from './App'
import { BrowserRouter }  from 'react-router-dom'
import { store }          from './store/store'
import { Provider }       from 'react-redux'
import { ToastContainer } from 'react-toastify'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
}                         from '@apollo/client'
import { Preloader }      from './components/Preloader/Preloader'



export const client = new ApolloClient( {
  uri:               'http://localhost:5094/',
  cache:             new InMemoryCache(),
  connectToDevTools: true,
} )

createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={ store }>
      <ApolloProvider client={ client }>
        <App/>
        <ToastContainer
          autoClose={ 2500 }
          position={ 'bottom-left' }
          theme={ 'light' }
          pauseOnHover
        />
        <Preloader/>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)
