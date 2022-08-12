/* eslint-disable react/jsx-max-props-per-line */
import React, {
  ChangeEventHandler,
  FC
}                       from 'react'
import { compact }      from 'lodash'
import { GStudentType } from '../../../other/generated'
import styled, { css }  from 'styled-components'



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

const SharedStyles = css`
  background : transparent;
  text-align : center;
  width      : 100%;
  font-size  : 1.25rem /* 20/16 */;
  color      : var(--COLOR_white);
`

const StyledParagraph = styled.p`
  ${ SharedStyles };
  font-weight : 600;
`

const StyledLineEdit = styled.input.attrs( { type: 'text' } )`
  ${ SharedStyles };
  border        : none;
  border-bottom : 2px solid var(--COLOR_white);
  margin-top    : .2rem;
`