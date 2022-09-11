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

export const FlatBoxCSS = css`
  border-radius : 10px;
  padding       : .4rem 1rem;
  display       : flex;
  align-items   : center;
  gap           : 10px;
  text-align    : center;
`

export const FlatCircleCSS = css`
  ${FlatBoxCSS};
  padding : .4rem .4rem;
`

export const FlatBox = styled.span<FlatBoxProps>`
  ${FlatBoxCSS};
  background : rgba(255, 255, 255, 0.2);
  transition : background .1s ease;

  fill       : white;

  &[type="text"] {
    padding : .3rem .9rem;
  }

  ${p => p.hoverable && css`
    position : relative;

    &:hover ${p.hoverable.elem as any} {
      display : ${p.hoverable.display};
    }
  `}
  ${p => p.clickable && css`
    cursor : pointer;

    &:hover {
      background : rgba(255, 255, 255, 0.4);
    }

    &:active {
      background : rgba(255, 255, 255, 0.6);
    }
  `}
  &:disabled {
    cursor     : default;
    filter     : brightness(0.5);
    background : rgba(255, 255, 255, 0.2);
  }
`