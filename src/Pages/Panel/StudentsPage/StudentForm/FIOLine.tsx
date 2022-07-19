import React, {
  ChangeEvent,
  FC
}                  from 'react'
import styled      from 'styled-components'
import { compact } from 'lodash'
import { PickOne } from '../../../../store/types'



type TFIO = {
  lastName: string
  firstName: string
  patronymic: string
}

type Props = {
  isEdit: boolean
  values: TFIO
  setValues: ( values: PickOne<TFIO> )=> void
}
type event = ChangeEvent<HTMLInputElement>
const FIOLine: FC<Props> = props => (
  props.isEdit
    ? <>
      {/*<Line*/}
      {/*  field='lastName'*/}
      {/*  value={ props.values.lastName || '' }*/}
      {/*  onChange={ ( e: event ) => props.setValues( { lastName: e.currentTarget.value } ) }*/}
      {/*/>*/}
      {/*<Line*/}
      {/*  field='firstName'*/}
      {/*  value={ props.values.firstName || '' }*/}
      {/*  onChange={ ( e: event ) => props.setValues( { firstName: e.currentTarget.value } ) }*/}
      {/*/>*/}
      {/*<Line*/}
      {/*  field='patronymic'*/}
      {/*  value={ props.values.patronymic || '' }*/}
      {/*  onChange={ ( e: event ) => props.setValues( { patronymic: e.currentTarget.value } ) }*/}
      {/*/>*/}
    </>
    : <></>
    // : <Line>{ compact( [ props.values.lastName, props.values.firstName, props.values.patronymic ] ).join( ' ' ) }</Line>
)

export default FIOLine

type Props2 = ({
  $input: true
  field: string
  values: TFIO
})
const Line = styled.div.attrs<Props2>( props => (props.$input
  ? ({ as: 'input', type: 'text' })
  : ({ as: 'p' })
) )<Props2>`
`