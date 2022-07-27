import React, { FC }      from 'react'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'
import {
  TextLine,
  Title
}                         from '../../../../../components/Forms'



export const DescriptionField: FC = () => {
  const { isEdit, studentOriginal, studentModified, changeStudent } = useStudentForm()

  return (
    <>
      { (studentOriginal?.description || isEdit) &&
          <>
            <Title>Заметки</Title>
            { isEdit
              ? <textarea
                placeholder='Заметки'
                value={ studentModified?.description ?? undefined }
                onChange={ e => changeStudent( { description: e.currentTarget.value || null } ) }
              />
              : <TextLine>{ studentOriginal?.description }</TextLine>
            }
          </>
      }
    </>
  )
}