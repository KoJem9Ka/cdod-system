import React               from 'react'
import {
  Navigate,
  Route,
  Routes
}                          from 'react-router-dom'
import UserLayoutWithPanel from './Layout/BasicLayout/UserLayoutWithPanel'
import NotFoundPage        from './Pages/ErrorPages/NotFoundPage/NotFoundPage'
import LoginPage           from './Pages/LoginPage/LoginPage'
import { CRoutesTest }     from './components/Panel/PanelConfig'



const App: React.FC = () => (
  <Routes>
    <Route element={ <Navigate to='/students'/> } path='/'/>

    <Route element={ <UserLayoutWithPanel/> } path='/'>
      { CRoutesTest.map( page => (
        <Route key={ page.route } element={ page.element } path={ page.route }/>
      ) ) }
    </Route>

    <Route element={ <LoginPage/> } path='login'/>
    <Route element={ <NotFoundPage/> } path='*'/>
  </Routes>
)

export default App
