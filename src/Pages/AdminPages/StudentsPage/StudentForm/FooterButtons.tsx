import React, { FC }       from 'react'
import {
  StForm,
  useStudentForm
}                          from '../../../../store/studentForm/hooks'
import { NON_EXISTING_ID } from '../../../../other/helpers'
import { isEqual }         from 'lodash'



export const FooterButtons: FC = () => {
  const { studentIsEdit, studentModified: st1, studentOriginal: st0 } = useStudentForm( s => [ s.studentIsEdit, s.studentModified, s.studentOriginal ] )

  return (
    <>
      {studentIsEdit
        ? <>
          <button disabled={isEqual( st0, st1 )} onClick={StForm.commit}>Сохранить</button>
          <button data-cancel onClick={st1?.id !== NON_EXISTING_ID ? StForm.toggleEdit : StForm.close}>Отмена</button>
        </>
        : <button onClick={StForm.toggleEdit}>Редактировать</button>
      }
    </>
  )
}