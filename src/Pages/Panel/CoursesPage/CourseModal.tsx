import React, { useEffect } from 'react'
import { useCourseByIdQuery, useCoursesQuery } from '../../../other/generated'
import { useCourseForm } from '../../../store/courseForm/hooks'

type CourseModalProps = {}


const CourseModal: React.FC<CourseModalProps> = () => {
	
  const { isEdit, courseOriginal, courseModified, toggleEdit } = useCourseForm()
	
  return (
    courseModified ?
      <div>
        {courseModified.name}
        {courseModified.durationInMonths}
        {courseModified.price}
        {courseModified.equipmentPriceWithoutRobot}
        {courseModified.equipmentPriceWithRobot}
        {courseModified.programId}
        {
          isEdit 
            ?
            <>
              <button onClick={() => toggleEdit()}>Отмена</button>
              <button>Сохранить</button>
            </>
            :
            <>
              <button onClick={() => toggleEdit()}>Изменить</button>
            </>
        }
      </div>
      : <div>
				У вас тут...ошибка......
      </div>
  )
}


export default CourseModal