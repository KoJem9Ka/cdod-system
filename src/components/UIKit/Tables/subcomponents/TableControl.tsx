import {
  FlatBox,
  FlatBoxProps
}                            from '../../FlatBox'
import React, {
  ButtonHTMLAttributes,
  ComponentProps,
  FC,
  MouseEventHandler
}                            from 'react'
import { AtLeastOne }        from '../../../../other/typing'
import InputNumber           from '../../../UnstyledSkeletons/SpecialInputs/InputNumber'
import styled                from 'styled-components'
import DebouncedInput        from '../../../UnstyledSkeletons/SpecialInputs/DebouncedInput'
import Icons, { Thumbnails } from '../../../../assets/icons/Icons'



type TableControlProps = {
  variant?: 'iconButton'
  hoverable?: FlatBoxProps['hoverable']
  onClick?: MouseEventHandler<HTMLButtonElement>
} & AtLeastOne<{
  thumb: Thumbnails
  text?: string
}> & ButtonHTMLAttributes<HTMLButtonElement>
| {
  variant: 'textInput'
  // } & RequiredFields<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
} & ComponentProps<typeof DebouncedInput>
| {
  variant: 'numberInput'
} & ComponentProps<typeof InputNumber>

export const TableControl: FC<TableControlProps> = props => {
  switch ( props.variant ) {
  default:
    return (
      <FlatBox
        as='button'
        clickable={ !!props.onClick}
        onClick={props.onClick}
        {...props}
      >
        {props.thumb && <Icons thumb={props.thumb}/>}
        {props.text}
        {props.children}
      </FlatBox>
    )
  case 'numberInput':
    return <FlatBox as={InputNumber} style={{ width: '5ch' }} {...props}/>
  case 'textInput':
    return <FlatBox as={DebouncedInput} {...props}/>
  }
}


export const CheckOrRadioLabel = styled.label`
  cursor : pointer;

  *:not(:last-child) {
    margin-right : 1rem;
  }
`
export const ListPosAbsolute = styled.div`
  position       : absolute;
  display        : none;
  top            : 100%;
  z-index        : 15;
  background     : var(--COLOR_dark);
  flex-direction : column;
  align-items    : flex-start;
  width          : max-content;
  left           : 50%;
  transform      : translateX(-50%);
  gap            : 1rem;
  padding        : 1rem;
  border-radius  : 0 0 1rem 1rem;
`