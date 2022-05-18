import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../store/store'
import { thunkLoadStudentsTable } from '../../../store/students/thunks'

const StudentsPage: React.FC = () => {
  const dispatch = useAppDispatch()

  //TODO: доделать запрос получения студентов
  useEffect( () => {
    dispatch( thunkLoadStudentsTable )
  }, [] )

  return (
    <>
      <h2>Страница студентов</h2>
    </>
  )
}

export default StudentsPage
