import React from 'react'
import groupForm, { QGroupTeacher } from '../GroupForm'
import { GForm, useGroupForm } from '../../../../../store/groupForm/hooks'
import { GTeachersQuery, useTeachersQuery } from '../../../../../other/generated'
import { NON_EXISTING_ID, strJoinSpace } from '../../../../../other/helpers'
import { HeadStyledSelect, HeadStyledText } from '../../../../../components/UIKit/Forms/styled'


type GroupSelectTeacherProps = {
  value: string
  onChange: (teacher: QGroupTeacher)=> void
}

const GroupSelectTeacher: React.FC<GroupSelectTeacherProps> = ({ value, onChange }) => {
  const { isEdit, groupOriginal, groupModified } = useGroupForm(g => [ g.isEdit, g.groupOriginal, g.groupModified ])
  const { data: { teachers: teachers } = { teachers: [] } } = useTeachersQuery()
  
  const isNew = () => groupModified?.id === NON_EXISTING_ID
  
  return isEdit ? (
    <HeadStyledSelect value={groupModified?.teacher.id} onChange={e => onChange({ id: +e.currentTarget.value })}>
      <option disabled={groupModified?.teacher.id !== NON_EXISTING_ID} value={NON_EXISTING_ID}>Выбор:&nbsp;</option>
      {
        teachers.map(teacher => {
          const teacherName = strJoinSpace(teacher.lastName, teacher.firstName && teacher.firstName[0] + '.', teacher.patronymic && teacher.patronymic[0] + '.')
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