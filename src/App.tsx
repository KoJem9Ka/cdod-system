import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BasicLayout from './Layout/BasicLayout/BasicLayout'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

const App: React.FC = () => (
  <>
    <Routes>
      <Route element={<BasicLayout/>} path='/students'/>
      <Route element={<Navigate to='/students'/>} path='/'/>
      {/*
      //students
      //schedule
      //courses
      //groups
      //teachers
      //payment
      */}
      <Route element={<NotFoundPage/>} path='*'/>
    </Routes>
  </>
)

export default App
