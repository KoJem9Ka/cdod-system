import React, {
  useEffect,
  useMemo
}                           from 'react'
import Workspace            from '../../../HOC/Workspace/Workspace'
import styles               from './StudentsPage.module.scss'
import StudentsTable        from './StudentsTable/StudentsTable'
import { toast }            from 'react-toastify'
import { usePreloader }     from '../../../components/Preloader/Preloader'
import { useStudentsQuery } from './Students.generated'
import { useStudentForm }   from '../../../store/studentsForm/hooks'
import StudentForm          from './StudentForm/StudentForm'
import { FlexRow }          from '../../../components/styledComponents'
import { isEqual }          from 'lodash'



let prevFunc: any

const StudentsPage: React.FC = () => {
  const { loading, error, data } = useStudentsQuery()
  const students = useMemo( () => data?.students || [], [ loading ] )

  const { selectStudent } = useStudentForm()


  usePreloader( loading )
  useEffect( () => {
    error && toast.error( JSON.stringify( error ) )
  }, [ error ] )

  return (
    <>
      <Workspace className={ styles.StudentsPage }>
        <FlexRow>
          <StudentsTable data={ students } onRowSelected={ selectStudent }/>
          <StudentForm/>
        </FlexRow>
        <h2>
          Всего студентов:&nbsp;
          { data?.students.length }
        </h2>
      </Workspace>
    </>
  )
}

export default StudentsPage
