import { ApolloProvider } from '@apollo/client'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration1 from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import { Preloader } from './components/Preloader/Preloader'
import { client } from './queries/client'
import { store } from './store/store'
import './styles/index.scss'
import './wdyr'



dayjs.locale( 'ru' )
dayjs.extend( relativeTime )
dayjs.extend( duration1 )
dayjs.extend( customParseFormat )


createRoot( document.getElementById( 'root' )! ).render(
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
