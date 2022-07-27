import React, { FC }      from 'react'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'



export const FooterButtons: FC = () => {
  const { isEdit, toggleEdit } = useStudentForm()

  return (
    <>
      { isEdit
        ? <>
          <button onClick={ () => toggleEdit() }>Сохранить</button>
          <button onClick={ () => toggleEdit() }>Отмена</button>
        </>
        : <button onClick={ () => toggleEdit() }>Редактировать</button>
      }
    </>
  )
}