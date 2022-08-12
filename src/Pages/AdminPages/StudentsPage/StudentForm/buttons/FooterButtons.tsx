import React, { FC }      from 'react'
import { useStudentForm } from '../../../../../store/studentForm/hooks'



export const FooterButtons: FC = () => {
  const { studentIsEdit, studentToggleEdit, studentCommit } = useStudentForm()

  return (
    <>
      { studentIsEdit
        ? <>
          <button onClick={ studentCommit }>Сохранить</button>
          <button data-cancel onClick={ () => studentToggleEdit() }>Отмена</button>
        </>
        : <button onClick={ () => studentToggleEdit() }>Редактировать</button>
      }
    </>
  )
}