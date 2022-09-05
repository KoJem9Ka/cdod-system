import React from 'react'
import { useGroupForm } from '../../../../store/groupForm/hooks'
import {FooterButton} from '../../../../components/UIKit/Forms/styled';

const GroupFooterButtons: React.FC = () => {
  const { isEdit, isModified, toggleEdit } = useGroupForm()
	
  return (
    <>
      {
        isEdit ?
          <>
            <FooterButton disabled={!isModified()} onClick={() => alert('Сохранено!')}>Сохранить</FooterButton>
            <button data-cancel onClick={() => toggleEdit()}>Отмена</button>
          </>
          : <button onClick={() => toggleEdit()}>Редактировать</button>
      }
    </>
  )
}

export default GroupFooterButtons