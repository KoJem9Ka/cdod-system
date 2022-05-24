import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { thunkLoadStudentsTable } from '../../../store/students/thunks'
import Workspace from '../../../HOC/Workspace/Workspace'
import styles from './StudentsPage.module.scss'
import { CStudentTable, TStudentTable } from './studentsTableConfig'
import GridTable from '../../../components/Tables/GridTable/GridTable'

const StudentsPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { students, status, error } = useAppSelector( state => ({
    students: state.students.list,
    status  : state.students.status,
    error   : state.students.error,
  }) )

  const [ preparedStudents, setPreparedStudents ] = useState<TStudentTable[]>( [] )

  useEffect( () => {
    dispatch( thunkLoadStudentsTable() )
  }, [] )

  useEffect( () => {
    setPreparedStudents( students.map( student => ({ ...student, FIO: `${student.first_name} ${student.last_name} ${student.patronymic}` }) ) )
  }, [ students ] )

  return (
    <Workspace className={styles.StudentsPage}>
      <h2>Страница студентов</h2>
      {
        status === 'pending' ? <h3>Loading...</h3> :
          status === 'rejected' ? <h3>{`Error: ${error}`}</h3> :
            status === 'fulfilled' && (
              <>
                <h3>{`Loaded: ${students.length}`}</h3>
                <GridTable
                  columnsConfig={CStudentTable}
                  data={preparedStudents}
                  globalSearch
                  paginatable
                  scrollable
                />
              </>
            )
      }
    </Workspace>
  )
}

export default StudentsPage
