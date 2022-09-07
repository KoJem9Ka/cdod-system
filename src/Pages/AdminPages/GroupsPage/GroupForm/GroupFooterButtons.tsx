import React from 'react'
import { useGroupForm } from '../../../../store/groupForm/hooks'
import {FooterButton} from '../../../../components/UIKit/Forms/styled';

const GroupFooterButtons: React.FC = () => {
  const { isEdit, isModified, groupToggleEdit } = useGroupForm()
	
  return (
    <>
      {
        isEdit ?
          <>
            <FooterButton disabled={!isModified()} onClick={() => alert('Сохранено!')}>Сохранить</FooterButton>
            <button data-cancel onClick={() => groupToggleEdit()}>Отмена</button>
          </>
          : <button onClick={() => groupToggleEdit()}>Редактировать</button>
      }
    </>
  )
}

export default GroupFooterButtons