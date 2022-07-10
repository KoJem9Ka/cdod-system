import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import style from './GroupPanel.module.scss'
import GroupPanelHeader from './GroupPanelHeader'
import GroupPanelList from './GroupPanelList'
import GroupPanelFooter from './GroupPanelFooter'
import _ from 'lodash/fp'
import { TGroup, TGroupWithStudents, TStudent } from '../../../../types'

const GroupPanel: React.FC<{ id: number }> = ({ id }) => {
  const [ isEdit, setIsEdit ] = useState(false)
  const [ removedIds, setRemovedIds ] = useState<number[]>([])
  const [ addedIds, setAddedIds ] = useState<number[]>([])
	
	
  const [ currentGroup, setCurrentGroup ] = useState<TGroupWithStudents>()
  const [ editedGroup, setEditedGroup ] = useState<TGroupWithStudents>()
	
  const getOneGroup = gql`
    query getOneGroup($groupId: ID!){
      Group(id: $groupId){
        id
        course
        groupName
        dateOfCreation
        studentsCount
        teacher
        Students{
          id
          last_name
          first_name
          patronymic
          birth_date
        }
      }
    }`
  const { data } = useQuery<TGroupWithStudents>(getOneGroup, { variables: { groupId: id } })
	
  const handleEditing = () => {
    setIsEdit(!isEdit)
  }
	
  const handleSaving = () => {
	
  }
  
  // TODO: убрать no-shadow...
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleRemove = (id: number) => {
    if (removedIds.includes(id)) {
      setRemovedIds(removedIds.filter(itemId => itemId !== id))
    }
    else {
      setRemovedIds([ ...removedIds, id ])
    }
  }
	
  const handleSetEditedGroup = (group: TGroup) => {
    setEditedGroup({ Group: { ...group, Students: currentGroup?.Group.Students as TStudent[] } })
  }
	
  const isEqual = _.isEqual(currentGroup, editedGroup) && !removedIds.length
  const countStudents = (editedGroup && editedGroup.Group.Students.length - removedIds.length + addedIds.length ) as number
	
  useEffect(() => {
    if (!data) return
    setCurrentGroup({ Group: data.Group })
    setEditedGroup({ Group: data.Group })
  }, [ data ])
	
  useEffect(() => {
    if (!isEdit) {
      setRemovedIds([])
      setAddedIds([])
      setEditedGroup(currentGroup)
    }
  }, [ isEdit ])
	
  useEffect(() => {
    setIsEdit(false)
  }, [ id ])
  
  if (!data) return <div>err</div>
	
  // TODO: Добавить добавляемые айдишники
	
  return (
    <div className={style.group_panel}>
      {
        currentGroup && editedGroup && <>
          <GroupPanelHeader
            countStudents={countStudents}
            group={editedGroup.Group}
            handleSetEditedGroup={handleSetEditedGroup}
            isEdit={isEdit}
          />
          <GroupPanelList handleRemove={handleRemove} isEdit={isEdit} students={currentGroup.Group.Students}/>
          <GroupPanelFooter handleEditing={handleEditing} isEdit={isEdit} isEqual={isEqual}/>
        </>
      }
    </div>
  )
}

export default GroupPanel