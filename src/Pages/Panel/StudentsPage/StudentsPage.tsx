import React                   from 'react'
import Workspace               from '../../../HOC/Workspace/Workspace'
import styles                  from './StudentsPage.module.scss'
import StudentForm             from './StudentForm/StudentForm'
import { FlexRow }             from '../../../components/UIKit/otherStyled'
import StudentsTable           from './StudentsTable/StudentsTable'
import { useAllStudentsQuery } from '../../../other/generated'



const StudentsPage: React.FC = () => {

  const { data } = useAllStudentsQuery()

  return (
    <>
      <Workspace className={ styles.StudentsPage }>
        <FlexRow>
          <StudentsTable/>
          <StudentForm/>
        </FlexRow>
        {/*<h2>*/ }
        {/*  Всего студентов:&nbsp;*/ }
        {/*  { data?.students.length || 0 }*/ }
        {/*</h2>*/ }
      </Workspace>
    </>
  )
}

export default StudentsPage
