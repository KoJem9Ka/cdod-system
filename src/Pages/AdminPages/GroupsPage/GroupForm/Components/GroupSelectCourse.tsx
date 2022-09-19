import React from 'react'
import { HeadStyledSelect, HeadStyledText } from '../../../../../components/UIKit/Forms/styled'
import { NON_EXISTING_ID, strJoinSpace } from '../../../../../other/helpers'
import { useGroupForm } from '../../../../../store/groupForm/hooks'
import { GCoursesQuery, GCourseType, useCoursesQuery } from '../../../../../other/generated'
import { QGroupCourse } from '../GroupForm'

type GroupSelectCourseProps = {
  value: string
  onChange: (course: QGroupCourse)=> void
}

const GroupSelectCourse: React.FC <GroupSelectCourseProps> = ({ value, onChange }) => {
  const { isEdit, groupModified } = useGroupForm(g => [ g.isEdit, g.groupOriginal, g.groupModified ])
  const { data: { courses: courses } = { courses: [] } } = useCoursesQuery()
  
  const isNew = () => groupModified?.id === NON_EXISTING_ID
  
  return isEdit && isNew() ? (
    <HeadStyledSelect value={groupModified?.course.id} onChange={e => onChange({ id: +e.currentTarget.value, name: '' })}>
      <option disabled={groupModified?.course.id !== NON_EXISTING_ID}>Выбор:&nbsp;</option>
      {
        courses.map(course => (
          <option key={course.id} value={course.id}>{course.name}</option>
        ))
      }
    </HeadStyledSelect>
  )
    : (
      <HeadStyledText>{isNew() ? 'Нет курса' : value}</HeadStyledText>
    )
}

export default GroupSelectCourse