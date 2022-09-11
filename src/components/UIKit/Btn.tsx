import styled, { css } from 'styled-components'
import {
  FlatBoxCSS,
  FlatCircleCSS
}                      from './FlatBox'



const BtnHoveringBase = css`
  cursor     : pointer;
  transition : all 200ms ease;

  &:disabled {
    cursor : no-drop;
  }
`

export const BtnHoveringDark = css`
  ${BtnHoveringBase}
  &:hover {
    filter : brightness(1.1);
  }

  &:active {
    filter : brightness(0.9);
  }

  &:disabled {
    filter : saturate(0.5) brightness(0.9);
  }
`

export const BtnHoveringLight = css`
  ${BtnHoveringBase}
  &:hover {
    filter : brightness(0.9);
  }

  &:active {
    filter : brightness(0.7);
  }

  &:disabled {
    filter : saturate(0.5) brightness(0.9);
  }
`

export const Btn = styled.button<{ bg?: string, fg?: string }>`
  ${FlatBoxCSS};
  ${BtnHoveringDark};

  background : ${( { bg } ) => (bg ? bg : 'var(--COLOR_blue)')};
  color      : ${( { fg } ) => (fg ? fg : 'var(--COLOR_white)')};
`

export const BtnMini = styled.button`
  ${FlatCircleCSS};
  ${BtnHoveringLight};

  svg {
    fill : var(--COLOR_grades-mark--bad--main);
  }

  color      : var(--COLOR_grades-mark--bad--main);
  background : var(--COLOR_grades-mark--bad-back);
`