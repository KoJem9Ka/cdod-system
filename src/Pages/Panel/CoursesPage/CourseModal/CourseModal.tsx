import React from 'react'
import { useCourseForm } from '../../../../store/courseForm/hooks'
import styled from 'styled-components'
import CourseModalFooter from './CourseModalFooter'
import CourseModalHeader from './CourseModalHeader'






type CourseModalProps = {}
const CourseModal: React.FC<CourseModalProps> = () => {
	
  const { isEdit, courseOriginal, courseModified, toggleEdit, isModified } = useCourseForm()
  
  
  //TODO: img not null..?
  console.log(courseModified?.svgIconUrl)
  
  return (
    courseModified ?
      <div>
        <CourseModalHeader/>
        <CourseModalFooter/>
      </div>
      : <div>
				У вас тут...ошибка......
      </div>
  )
}


export default CourseModal