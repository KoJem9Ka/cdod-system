import React, { useEffect, useState } from 'react'
import Workspace from '../../../HOC/Workspace/Workspace'
import CourseGrid from './CourseGrid'
import { useCoursesQuery } from '../../../other/generated'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'
import CourseModal from './CourseModal'
import { useCourseForm } from '../../../store/courseForm/hooks'
import { isNil } from 'lodash'
import styled from 'styled-components'
import { ReactComponent as AddIcon } from '../../../assets/icons/IconAdd.svg'


const EditBlock = styled.div`
  display: flex;
  justify-content: right;
  & > button{
  
  }
`

const AddButton = styled.button`
  //outline: none;
  //border: none;
  font-size: 1.5rem;
  border-radius: 100rem;
  background: var(--COLOR_blue);
`

const CoursesPage: React.FC = () => {
  const { data } = useCoursesQuery()
  
  const { courseModified, closeCourseForm  } = useCourseForm()
  
  // const close = (e:  KeyboardEvent) => {
  //   if (e.key === 'Escape') closeCourseForm()
  // }
  //
  // useEffect(() => {
  //   if (!isNil(courseModified)) {
  //     window.addEventListener('keydown', close)
  //   }
  //   else{
  //     window.removeEventListener('keydown', close)
  //   }
  // }, [])
  
  return (  
    <Workspace>
      {
        data && <CourseGrid courses={data.courses}/>
      }
      
      {
        <ModalWindow closeHanlder={closeCourseForm} isVisible={!isNil(courseModified)}>
          <CourseModal/>
        </ModalWindow>
      }
      <EditBlock>
        {/*<AddButton>+</AddButton>*/}
        {/*<AddIcon height={30} width={30}/>*/}
      </EditBlock>
    </Workspace>
  )
}

export default CoursesPage
