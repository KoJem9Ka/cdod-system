import React, { useCallback, useEffect, useState } from 'react'
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

const WorkspaceV2 = styled(Workspace)`
  gap: 1rem;
  & > * + *{
    margin-top : 0;
  }

`

const EditBlock = styled.div`
  //position: absolute;
  //bottom: 1.5rem;
  //right: 1.5rem;
  align-self: flex-start;
  display: flex;
  justify-content: right;
  background-color: var(--COLOR_blue);
  border-radius: 1rem;
  padding: 0.5rem;
  //margin-bottom: 1rem;
  gap: 1rem;
`

const AddButton = styled.button`
  cursor: pointer;;
  display: flex;
  font-size: 1.5rem;
`

const CoursesPage: React.FC = () => {
  const { data, loading } = useCoursesQuery()
  
  const { courseModified, closeCourseForm, courseLoading } = useCourseForm()
  

  usePreloader(loading || courseLoading)
  
  return (
    <WorkspaceV2>
      <EditBlock>
        <AddButton><AddIcon height={30} width={30}/></AddButton>
        <AddButton><AddIcon height={30} width={30}/></AddButton>
      </EditBlock>
  
      {
        data
          ? <CourseGrid courses={data.courses}/>
          : <h2> Нет данных</h2>
      }
  
      {
        !isNil(courseModified) &&
      <ModalWindow closeHandler={closeCourseForm}>
        <CourseModal/>
      </ModalWindow>
      }
    </WorkspaceV2>
  )
}

export default CoursesPage
