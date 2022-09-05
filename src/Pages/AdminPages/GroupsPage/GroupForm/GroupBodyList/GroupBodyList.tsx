import React from 'react'
import GroupBodyListItem from './GroupBodyListItem'
import { useGroupsQuery } from '../../../../../other/generated'
import { useGroupForm } from '../../../../../store/groupForm/hooks'
import styled from 'styled-components'

// const List = styled(React.Fragment)`
// max-height: 20rem;
// `

const GroupBodyList: React.FC = () => {
  
  const { students } = useGroupForm()
  
  return (
    <>
      {
        students?.map((student, index) => (
          <GroupBodyListItem key={student.id} index={index} student={student}/>
        ))
      }
    </>
  )
}

export default GroupBodyList