import styled, { css } from 'styled-components'
import { ReactNode }   from 'react'
import { Property }    from 'csstype'



export type FlatBoxProps = {
  clickable?: boolean
  hoverable?: {
    elem: ReactNode
    display: Property.Display
  }
}

export const FlatBox = styled.div<FlatBoxProps>`
  background    : rgba(255, 255, 255, 0.2);
  border-radius : 10px;
  display       : flex;
  gap           : 10px;
  align-items   : center;
  transition    : background .1s ease;

  fill          : white;
  text-align    : center;

  padding       : .4rem 1rem;

  &[type="text"] {
    padding : .3rem .9rem;
  }

  ${ p => p.hoverable && css`
    position : relative;

    &:hover ${ p.hoverable.elem as any } {
      display : ${ p.hoverable.display };
    }
  ` }
  ${ p => p.clickable && css`
    cursor : pointer;

    &:hover {
      background : rgba(255, 255, 255, 0.4);
    }

    &:active {
      background : rgba(255, 255, 255, 0.6);
    }
  ` }
  &:disabled {
    cursor     : default;
    filter     : brightness(0.5);
    background : rgba(255, 255, 255, 0.2);
  }
`