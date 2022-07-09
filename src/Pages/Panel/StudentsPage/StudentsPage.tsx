import React                from 'react'
import Workspace            from '../../../HOC/Workspace/Workspace'
import styles               from './StudentsPage.module.scss'
import { useQueryStudents } from '../../../queriesLOCAL'
import StudentsTable        from './StudentsTable/StudentsTable'
import { TStudent }         from '../../../types'
import { toast }            from 'react-toastify'



const StudentsPage: React.FC = () => {
  const { loading, error, students } = useQueryStudents()

  const rowHandler = ( id: TStudent['id'] ) => {
    toast( `student id: ${ id }` )
  }

  return (
    <Workspace className={ styles.StudentsPage }>
      <h2>Страница студентов</h2>
      {
        loading ? <h3>Loading...</h3> :
          error ? <h3>{ `Error: ${ error }` }</h3> : (
            <StudentsTable data={ students } onRowSelected={ rowHandler }/>
          )
      }
    </Workspace>
  )
}

export default StudentsPage
