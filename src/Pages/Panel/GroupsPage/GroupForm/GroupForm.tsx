import React, {
  useEffect,
  useState
}                            from 'react'
import style                 from './GroupForm.module.scss'
import GroupFormHeader       from './GroupFormHeader'
import GroupFormList         from './GroupFormList'
import GroupFormFooter       from './GroupFormFooter'
import { isEqual }           from 'lodash/fp'
import {
  TGroup,
  TGroupWithStudents,
  TStudent
}                            from '../../../../types'
import { useQueryGroupById } from '../../../../queriesLOCAL/group'

const GroupForm: React.FC<{ id: number }> = ( { id } ) => {
  const [ isEdit, setIsEdit ] = useState( false )
  const [ removedIDs, setRemovedIDs ] = useState<number[]>( [] )
  const [ addedIDs, setAddedIDs ] = useState<number[]>( [] )

  const [ currentGroup, setCurrentGroup ] = useState<TGroupWithStudents>()
  const [ editedGroup, setEditedGroup ] = useState<TGroupWithStudents>()

  const { data: group } = useQueryGroupById( id )

  const handleSaving = () => undefined
  const handleRemove = ( id1: number ) => {
    removedIDs.includes( id1 )
      ? setRemovedIDs( removedIDs.filter( itemId => itemId !== id1 ) )
      : setRemovedIDs( [ ...removedIDs, id1 ] )
  }
  const handleSetEditedGroup = ( group1: TGroup ) => {
    setEditedGroup( { Group: { ...group1, Students: currentGroup?.Group.Students as TStudent[] } } )
  }

  const notChanged = isEqual( currentGroup, editedGroup ) && !removedIDs.length && !addedIDs.length
  const studentsCountAfterEdit = (editedGroup && editedGroup.Group.Students.length - removedIDs.length + addedIDs.length) as number

  useEffect( () => {
    if ( !group ) return
    setCurrentGroup( { Group: group.Group } )
    setEditedGroup( { Group: group.Group } )
  }, [ group ] )

  useEffect( () => {
    if ( !isEdit ) {
      setRemovedIDs( [] )
      setAddedIDs( [] )
      setEditedGroup( currentGroup )
    }
  }, [ isEdit ] )

  useEffect( () => {
    setIsEdit( false )
  }, [ id ] )

  // TODO: Добавить добавляемые айдишники

  return (
    <div className={ style.group_panel }>
      {
        currentGroup && editedGroup && <>
          <GroupFormHeader
            countStudents={ studentsCountAfterEdit }
            group={ editedGroup.Group }
            handleSetEditedGroup={ handleSetEditedGroup }
            isEdit={ isEdit }
          />
          <GroupFormList handleRemove={ handleRemove } isEdit={ isEdit } students={ currentGroup.Group.Students }/>
          <GroupFormFooter handleEditing={ () => void setIsEdit( !isEdit ) } isEdit={ isEdit } isEqual={ notChanged }/>
        </>
      }
    </div>
  )
}

export default GroupForm