import React, { useState } from 'react'
import GroupTable from './GroupTable/GroupTable'
import { TGroup } from '../../../types'
import { gql, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import GroupPanel from './GroupPanel/GroupPanel'

const GroupsPage: React.FC = () => {
  
  const [ chosenId, setChosenId ] = useState(0)
  type TGetAllGroups = { allGroups: TGroup[] }
  
  const getAllGroupsQuery = gql`
    query getAllGroups{
      allGroups{
        id
        course
        groupName
        teacher
        dateOfCreation
        studentsCount
      }
    }`
  
  const { data } = useQuery<TGetAllGroups>(getAllGroupsQuery)
  
  const handler = (id: TGroup['id']) => {
    setChosenId(+id)
    toast(`Выбрана группа с id ${id}`)
  }
  
  return (
    <>
      {
        data && <>
          <GroupTable data={data.allGroups} onRowSelected={handler}/>
          {
            chosenId && <>
              <GroupPanel id={chosenId}/>
            </>
          }
        </>
      }
    </>
  )
}

export default GroupsPage
