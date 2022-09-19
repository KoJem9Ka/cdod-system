import React from 'react'
import GroupBodyListItem from './GroupBodyListItem'
import { useGroupForm } from '../../../../../store/groupForm/hooks'
import { ReactComponent as NoStudents } from '../../../../../assets/icons/notFoundStudents.svg'
import styled from 'styled-components'

const NoStudentsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: var(--COLOR_gray-pale-punctuated);
  font-weight: 600;
  gap: 0.625rem;
`

const GroupBodyList: React.FC = () => {
  const { students, otherStudents, isEdit } = useGroupForm(g => [ g.students, g.otherStudents, g.isEdit ])
  
  if (!students.length && !isEdit) 
    return (
      <NoStudentsBlock>
        <NoStudents/>
        Нет учеников
      </NoStudentsBlock>
    )
  
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