/* eslint-disable react/jsx-max-props-per-line */
import React, {
  ChangeEventHandler,
  FC
}                       from 'react'
import { compact }      from 'lodash'
import { GStudentType } from '../../../other/generated'
import styled, { css }  from 'styled-components'
import { StyledLineEdit, StyledParagraph } from './styled'



type Props = {
  isEdit: boolean
  values: {
    lastName: GStudentType['lastName']
    firstName: GStudentType['firstName']
    patronymic: GStudentType['patronymic']
  }
  setValues: ( args: Partial<Record<'lastName' | 'firstName' | 'patronymic', string>> )=> void
}

export const EditableFIO: FC<Props> = ( { isEdit, setValues, values: { firstName, lastName, patronymic } } ) => {
  const fio = compact( [ lastName, firstName, patronymic ] ).join( ' ' )

  const handler: ChangeEventHandler<HTMLInputElement> = e => setValues( { [e.currentTarget.name]: e.currentTarget.value } )

  return isEdit ? <div>
    <StyledLineEdit name='lastName' placeholder='Фамилия' value={ lastName ?? '' } onChange={ handler }/>
    <StyledLineEdit name='firstName' placeholder='Имя' value={ firstName ?? '' } onChange={ handler }/>
    <StyledLineEdit name='patronymic' placeholder='Отчество' type='text' value={ patronymic ?? '' } onChange={ handler }/>
  </div>
    : <StyledParagraph>{ fio }</StyledParagraph>
}

