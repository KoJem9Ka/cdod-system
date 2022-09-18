import React from 'react'
import GroupBodyListItem from './GroupBodyListItem'
import { useGroupForm } from '../../../../../store/groupForm/hooks'

const GroupBodyList: React.FC = () => {
  const { students, otherStudents, isEdit } = useGroupForm(g => [ g.students, g.otherStudents, g.isEdit ])
  
  return (
    <>
      {
        students.map((student, index) => (
          <GroupBodyListItem key={student.id} index={index} student={student}/>
        ))
      }
      {
        isEdit && otherStudents.map(student => (
          <GroupBodyListItem key={student.id} student={student} other/>
        ))
      }
    </>
  )
}

export default GroupBodyList