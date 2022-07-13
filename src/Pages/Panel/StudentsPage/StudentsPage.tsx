import React                from 'react'
import Workspace            from '../../../HOC/Workspace/Workspace'
import styles               from './StudentsPage.module.scss'
import { useQueryStudents } from '../../../queriesLOCAL'
import StudentsTable        from './StudentsTable/StudentsTable'
import { TStudent }         from '../../../types'
import { toast }            from 'react-toastify'
import { usePreloader }     from '../../../components/Preloader/Preloader'



const StudentsPage: React.FC = () => {
  const { loading, error, students } = useQueryStudents()

  usePreloader( loading )

  const rowHandler = ( id: TStudent['id'] ) => {
    toast( `student id: ${ id }` )
  }

  return (
    <>
      <Workspace className={ styles.StudentsPage }>
        <StudentsTable data={ students } onRowSelected={ rowHandler }/>
        <h2>
          Всего:&nbsp;
          { students.length }
          &nbsp;студентов
        </h2>
      </Workspace>
    </>
  )
}

export default StudentsPage
