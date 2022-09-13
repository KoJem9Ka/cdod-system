import React from 'react'
import GroupBodyListItem from './GroupBodyListItem'
import { useGroupsQuery } from '../../../../../other/generated'
import { useGroupForm } from '../../../../../store/groupForm/hooks'
import styled from 'styled-components'

// const List = styled(React.Fragment)`
// max-height: 20rem;
// `

const GroupBodyList: React.FC = () => {
  const { students, otherStudents, isEdit } = useGroupForm(g => [ g.students, g.otherStudents, g.isEdit ])
  
  //TODO: отредактировать вывод студентов, заменить рандомные значения на айдишники
  return (
    <>
      {
        students?.map((student, index) => (
          <GroupBodyListItem key={Math.random()} index={index} student={student}/>
        ))
      }
      {
        isEdit && otherStudents?.map(student => (
          <GroupBodyListItem key={Math.random()} student={student} other/>
        ))
      }
    </>
  )
}

export default GroupBodyList