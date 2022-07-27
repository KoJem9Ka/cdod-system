import React, { useMemo }   from 'react'
import Workspace            from '../../../HOC/Workspace/Workspace'
import styles               from './StudentsPage.module.scss'
import StudentsTable        from './StudentsTable/StudentsTable'
import { usePreloader }     from '../../../components/Preloader/Preloader'
import { useStudentForm }   from '../../../store/studentsForm/hooks'
import StudentForm          from './StudentForm/StudentForm'
import { FlexRow }          from '../../../components/styledComponents'
import { useStudentsQuery } from '../../../other/generated'



const StudentsPage: React.FC = () => {
  const { loading, error: error1, data } = useStudentsQuery()
  const students = useMemo( () => data?.students || [], [ loading ] )

  const { selectStudent, error: error2, studentLoading } = useStudentForm()

  usePreloader( loading || studentLoading )
  // useEffect( () => {
  //   (error1 || error2) && toast.error( JSON.stringify( compact( [ error1, error2 ] ) ) )
  // }, [ error1, error2 ] )

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
