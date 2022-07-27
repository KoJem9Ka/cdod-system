import React, { useState } from 'react'
import Workspace from '../../../HOC/Workspace/Workspace'
import CourseGrid from './CourseGrid'
import { useCoursesQuery } from '../../../other/generated'
import ModalWindow from '../../../components/ModalWindow/ModalWindow'


const CoursesPage: React.FC = () => {
  const [ idModal, setIdModal ] = useState<number>()
  const { data } = useCoursesQuery()
  
  const closeHandler = () => {
    setIdModal(undefined)
  }
  
  const openModalHandler = (id: number) => {
    setIdModal(id)
  }
  
  return (
    <Workspace>
      {
        data && <CourseGrid courses={data.courses} openModalHandler={openModalHandler}/>
      }
      
      {
        idModal &&
        <ModalWindow closeHanlder={closeHandler}>
          {idModal}
        </ModalWindow>
      }
    </Workspace>
  )
}

export default CoursesPage
