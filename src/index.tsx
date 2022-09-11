import './wdyr'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.scss'
import React              from 'react'
import App                from './App'
import { BrowserRouter }  from 'react-router-dom'
import { store }          from './store/store'
import { Provider }       from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'
import { Preloader }      from './components/Preloader/Preloader'
import { client }         from './queries/client'
import { createRoot }     from 'react-dom/client'
import dayjs              from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime       from 'dayjs/plugin/relativeTime'
import duration1          from 'dayjs/plugin/duration'
import customParseFormat  from 'dayjs/plugin/customParseFormat'



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
  </React.StrictMode>,
)
