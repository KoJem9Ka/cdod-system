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
import { ApolloProvider } from '@apollo/client'
import { Preloader }      from './components/Preloader/Preloader'
import { client }         from './queries/client'



createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App/>
          <ToastContainer
            autoClose={2500}
            position={'bottom-left'}
            theme={'light'}
            pauseOnHover
          />
          <Preloader/>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
