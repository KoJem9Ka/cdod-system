import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BasicUserLayout from './Layout/BasicLayout/BasicLayout'

const App = () => (
  <>
    <Routes>

      <Route element={<BasicUserLayout/>} path='/students'>

      </Route>
      <Route element={<Navigate to='/students'/>} path='*'/>
    </Routes>
  </>
)

export default App
