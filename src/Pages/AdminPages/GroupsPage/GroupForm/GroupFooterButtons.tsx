import React from 'react'
import { GForm, useGroupForm, useIsGroupModified } from '../../../../store/groupForm/hooks'
import { FooterButton } from '../../../../components/UIKit/Forms/styled'
import { NON_EXISTING_ID } from '../../../../other/helpers'

const GroupFooterButtons: React.FC = () => {
  const { isEdit, groupModified } = useGroupForm(g => [ g.isEdit, g.groupModified ])
  const { toggleEdit } = GForm
  
  const isModified = useIsGroupModified()
  
  if (!groupModified) return null
  
  const isNotFilledComplete = () => groupModified.teacher.id === NON_EXISTING_ID || groupModified.course.id === NON_EXISTING_ID || groupModified.name.length === 0
  
  return (
    <>
      {
        isEdit ?
          <>
            <FooterButton disabled={!isModified || isNotFilledComplete()} onClick={GForm.commit}>Сохранить</FooterButton>
            <button data-cancel onClick={() => toggleEdit()}>Отмена</button>
          </>
          : <button onClick={toggleEdit}>Редактировать</button>
      }
    </>
  )
}

export default GroupFooterButtons