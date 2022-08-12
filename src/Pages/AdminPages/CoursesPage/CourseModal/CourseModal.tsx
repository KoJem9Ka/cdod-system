import React             from 'react'
import { useCourseForm } from '../../../../store/courseForm/hooks'
import CourseModalFooter from './CourseModalFooter'
import CourseModalHeader from './CourseModalHeader'
import CourseModalMain   from './CourseModalMain'



type CourseModalProps = {}
const CourseModal: React.FC<CourseModalProps> = () => {

  const { courseModified } = useCourseForm()

  return (
    courseModified ?
      <div>
        <CourseModalHeader/>
        <CourseModalMain/>
        <CourseModalFooter/>
      </div>
      : <div>
        У вас тут...ошибка......
      </div>
  )
}


export default CourseModal