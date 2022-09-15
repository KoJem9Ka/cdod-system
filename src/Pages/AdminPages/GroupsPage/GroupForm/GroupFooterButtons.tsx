import React from 'react'
import { GForm, useGroupForm, useIsGroupModified } from '../../../../store/groupForm/hooks'
import { FooterButton } from '../../../../components/UIKit/Forms/styled'

const GroupFooterButtons: React.FC = () => {
  const { isEdit } = useGroupForm(g => g.isEdit)
  const { groupToggleEdit } = GForm
  
  const isModified = useIsGroupModified()
  // console.log(isModified)
  
  return (
    <>
      {
        isEdit ?
          <>
            <FooterButton disabled={!isModified} onClick={GForm.groupCommit}>Сохранить</FooterButton>
            <button data-cancel onClick={() => groupToggleEdit()}>Отмена</button>
          </>
          : <button onClick={groupToggleEdit}>Редактировать</button>
      }
    </>
  )
}

export default GroupFooterButtons