import React from 'react'
import groupForm, { QGroupTeacher } from '../GroupForm'
import { GForm, useGroupForm } from '../../../../../store/groupForm/hooks'
import { GTeachersQuery, useTeachersQuery } from '../../../../../other/generated'
import { strJoinSpace } from '../../../../../other/helpers'
import { HeadStyledSelect, HeadStyledText } from '../../../../../components/UIKit/Forms/styled'


type GroupSelectProps = {
  value: string
  onChange: (teacher: QGroupTeacher)=> void
}

const GroupSelectTeacher: React.FC<GroupSelectProps> = ({ value, onChange }) => {
  const { isEdit } = useGroupForm(g => g.isEdit)
  const { data: { teachers: teachers } = { teachers: [] } } = useTeachersQuery()
  
  return isEdit ? (
    <HeadStyledSelect onChange={e => onChange({ id: +e.currentTarget.value})}>
      {
        teachers.map(teacher => {
          const teacherName = strJoinSpace(teacher.lastName, teacher.firstName && teacher.firstName[0], teacher.patronymic && teacher.patronymic[0])
          return (
            <option key={teacher.id} value={teacher.id}>{teacherName}</option>
          )
        })
      }
    </HeadStyledSelect>
  )
    : (
      <HeadStyledText>{value}</HeadStyledText>
    )
  
}

export default GroupSelectTeacher