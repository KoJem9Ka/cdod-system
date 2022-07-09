import 'devextreme/dist/css/dx.material.blue.light.compact.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.scss'
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



const client = new ApolloClient( {
  uri:               'http://localhost:3001',
  cache:             new InMemoryCache(),
  connectToDevTools: true,
} )

createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
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
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
