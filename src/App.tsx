import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasicLayout from './Layout/BasicLayout/BasicLayout'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

const App: React.FC = () => (
  <>
    <Routes>
      <Route element={<BasicLayout/>} path='/students'>
      </Route>
      {/*<Route element={<Navigate to='/students'/>} path='*'/>*/}
      <Route element={<NotFoundPage/>} path='*'/>
    </Routes>
  </>
)

export default App
