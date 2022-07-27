import React, { FC }      from 'react'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'
import {
  Caption,
  TextLine
}                         from '../../../../../components/Forms'



export const BirthDayField: FC = props => {
  const { isEdit, studentModified, changeStudent, studentOriginal } = useStudentForm()

  return (
    <>
      <Caption>Дата рождения</Caption>
      {
        isEdit
          ? <input type='date' value={ studentModified?.birthDate || undefined } onChange={ e => changeStudent( { birthDate: e.currentTarget.value } ) }/>
          : <TextLine>{ studentOriginal?.birthDate }</TextLine>
      }
    </>
  )
}