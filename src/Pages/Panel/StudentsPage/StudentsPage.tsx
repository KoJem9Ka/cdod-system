import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { thunkLoadStudentsTable } from '../../../store/students/thunks'
import Workspace from '../../../HOC/Workspace/Workspace'
import styles from './StudentsPage.module.scss'

const StudentsPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { students, status, error } = useAppSelector( state => ({
    students: state.students.list,
    status  : state.students.status,
    error   : state.students.error,
  }) )

  useEffect( () => {
    dispatch( thunkLoadStudentsTable() )
  }, [] )

  return (
    <Workspace className={styles.StudentsPage}>
      <h2>Страница студентов</h2>
      {
        status === 'pending' ? <h3>Loading...</h3> :
          status === 'rejected' ? <h3>{`Error: ${error}`}</h3> :
            status === 'fulfilled' && (
              <>
                <h3>{`Loaded: ${students.length}`}</h3>
              </>
            )
      }
    </Workspace>
  )
}

export default StudentsPage
