import React from 'react'
import { GForm, useGroupForm, useIsGroupModified } from '../../../../store/groupForm/hooks'
import { FooterButton } from '../../../../components/UIKit/Forms/styled'
import { NON_EXISTING_ID } from '../../../../other/helpers'

const GroupFooterButtons: React.FC = () => {
  const { isEdit, groupModified } = useGroupForm(g => [ g.isEdit, g.groupModified ])
  const { groupToggleEdit } = GForm
  
  const isModified = useIsGroupModified()
  
  if (!groupModified) return null
  
  const isNotFilledComplete = () => groupModified.teacher.id === NON_EXISTING_ID || groupModified.course.id === NON_EXISTING_ID || groupModified.name.length === 0
  
  console.log('isNotFilledComplete: ' + isNotFilledComplete)
  console.log('teacher: ' + (groupModified.teacher.id === NON_EXISTING_ID) )
  console.log('course: ' + (groupModified.course.id === NON_EXISTING_ID ))
  console.log('name: ' + (groupModified.name.length === 0))
  
  return (
    <>
      {
        isEdit ?
          <>
            <FooterButton disabled={!isModified || isNotFilledComplete()} onClick={GForm.groupCommit}>Сохранить</FooterButton>
            <button data-cancel onClick={() => groupToggleEdit()}>Отмена</button>
          </>
          : <button onClick={groupToggleEdit}>Редактировать</button>
      }
    </>
  )
}

export default GroupFooterButtons