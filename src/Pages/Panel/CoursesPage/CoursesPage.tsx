import React, { useEffect, useState } from 'react'
import Workspace from '../../../HOC/Workspace/Workspace'
import CourseGrid from './CourseGrid'
import { useCoursesQuery } from '../../../other/generated'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'
import CourseModal from './CourseModal/CourseModal'
import { useCourseForm } from '../../../store/courseForm/hooks'
import { isNil } from 'lodash'
import styled from 'styled-components'
import { ReactComponent as AddIcon } from '../../../assets/icons/IconAdd.svg'
import { usePreloader } from '../../../components/Preloader/Preloader'


const EditBlock = styled.div`
  display: flex;
  justify-content: right;
  & > button{
  
  }
`

const AddButton = styled.button`
  font-size: 1.5rem;
  border-radius: 100rem;
  background: var(--COLOR_blue);
`

const CoursesPage: React.FC = () => {
  const { data, loading } = useCoursesQuery()
  
  const { courseModified, closeCourseForm, courseLoading } = useCourseForm()
  
  const close = (e:  KeyboardEvent) => {
    if (e.key === 'Escape') closeCourseForm()
  }
  
  usePreloader(loading || courseLoading)
  
  useEffect(() => {
    if (courseModified) {
      window.addEventListener('keydown', close, { once: true })
    }
    return () => window.removeEventListener('keydown', close)
  }, [ courseModified ])
  
  return (  
    <Workspace>
      {
        data
          ? <CourseGrid courses={data.courses}/>
          : <h2> Нет данных</h2>
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
