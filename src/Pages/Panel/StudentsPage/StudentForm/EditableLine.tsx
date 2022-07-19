import React, {
  ChangeEvent,
  FC
}             from 'react'
import styled from 'styled-components'



type Props = {
  value: string
  setValue: ( value: string )=> void
  isEdit: boolean
}

const EditableLine: FC<Props> = ( { setValue, value, isEdit } ) => (
  <CoolLineEdit
    children={ isEdit ? undefined : value }
    as={ isEdit ? 'input' : 'p' }
    isEdit={ isEdit }
    type={ isEdit ? 'text' : undefined }
    value={ value }
    onChange={ ( e: ChangeEvent<HTMLInputElement> ) => setValue( e.currentTarget.value ) }
  />
)

export default EditableLine

type Props2 = {
  isEdit: boolean
}
const CoolLineEdit = styled.input<Props2>`
  background    : transparent;
  font-size     : 20px;
  width         : 100%;
  text-align    : center;
  color         : var(--COLOR_white);
  border        : none;
  border-bottom : 2px solid ${ props => (props.isEdit ? 'var(--COLOR_white)' : 'transparent') };
`