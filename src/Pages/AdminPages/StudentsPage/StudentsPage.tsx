import React, { useEffect }    from 'react'
import Workspace               from '../../../HOC/Workspace/Workspace'
import styles                  from './StudentsPage.module.scss'
import StudentForm             from './StudentForm/StudentForm'
import { FlexRow }             from '../../../components/UIKit/otherStyled'
import StudentsTable           from './StudentsTable/StudentsTable'
import { useAllStudentsQuery } from '../../../other/generated'
import { usePreloader }        from '../../../components/Preloader/Preloader'
import { toast }               from 'react-toastify'



const StudentsPage: React.FC = () => {

  const { data, loading, error } = useAllStudentsQuery()

  usePreloader( loading )

  useEffect( () => {
    error && toast.error( `Ошибка: ${ error }` )
  }, [ error ] )

  return (
    <>
      <Workspace className={ styles.StudentsPage }>
        <FlexRow>
          <StudentsTable/>
          <StudentForm/>
        </FlexRow>
      </Workspace>
    </>
  )
}

StudentsPage.whyDidYouRender = true

export default StudentsPage
