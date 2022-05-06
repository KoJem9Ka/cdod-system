import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BasicLayout from './layout/BasicLayout/BasicLayout'

const App = () => (
  <>
    <Routes>
      <Route element={<BasicLayout/>} path='/students'>
      </Route>
      <Route element={<Navigate to='/students'/>} path='*'/>
    </Routes>
  </>
)

export default App
