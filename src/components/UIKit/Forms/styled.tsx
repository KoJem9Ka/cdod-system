import styled, { css } from 'styled-components'
import { isNil }       from 'lodash'
import {
  BtnHoveringDark,
  BtnHoveringLight
}                      from '../Btn'



const CSSPadding15px = css`
  padding : 15px;
`

export const Form       = styled.div`
  overflow       : hidden;
  background     : var(--COLOR_blue);
  flex           : 0 0 350px;

  display        : flex;
  flex-direction : column;

  align-self     : flex-start;
  max-height     : 100%;
  color          : white;
  border-radius  : 1.25rem;

  font-size      : 0.9375rem /* 15/16 */;
`
export const FormHead   = styled.div`
  ${CSSPadding15px};
  width                 : 100%;
  display               : grid;
  grid-template-columns : auto 1fr;
  align-items           : center;
  box-shadow            : 0 0 1rem 1rem white;
  z-index               : 1;
  text-align            : center;
  grid-gap              : 0.5rem;
  
  & > *:nth-child(3) {
    align-self : start;
  }
  
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: column;
    & > p {
    
    }
  }
`
export const FormBody   = styled.div`
  ${CSSPadding15px};
  overflow-y : auto;
  max-height : 100%;
  color      : black;
  background : white;
  flex-grow  : 1;

  & > *:not(:last-child) {
    margin-bottom : 0.5rem;
  }
`
export const FormFooter = styled.div`
  box-shadow : 0 0 1rem 1rem white;
  display    : flex;

  button {
    ${CSSPadding15px};
    flex-grow   : 1;
    cursor      : pointer;
    font-weight : bold;
    background  : var(--COLOR_blue);

    &[data-cancel='true'] {
      background : rgb(255, 128, 128);
    }

    ${BtnHoveringDark};
  }
`

const CSSFont15pxCenter = css`
  font-size  : 0.9375rem /* 15/16 */;
  text-align : center;
`

export const Caption = styled.p`
  color     : var(--COLOR_gray-pale-punctuated);
  font-size : 0.75rem /* 12/16 */;
`

export const Title = styled.p`
  ${CSSFont15pxCenter};
  font-weight     : bold;
  display         : flex;
  justify-content : center;
  align-items     : center;
  gap             : 1rem;
`

export const SubTitle = styled.p`
  ${CSSFont15pxCenter};
`

export const TextField = styled.p<{ isValid?: boolean }>`
  min-width     : 100%;
  resize        : block;
  max-width     : 100%;
  background    : var(--COLOR_gray-background);
  border-radius : 0.625rem /* 10/16 */;
  padding       : 6px 10px;
  border        : none;

  &[data-select='true'] {
    ${BtnHoveringLight}
  }

  ${( { isValid } ) => !(isNil( isValid ) || isValid) &&
          css`
            padding : 4px 8px;
            border  : 2px solid red;
          `}
`

//TODO: убрать изменение фона, если кнопка неактивна
export const FooterButton = styled.button`
  opacity : ${props => (props.disabled ? 0.5 : 1)};
`

export const HeadStyledText = styled.p`
  font-size: 18px
`
export const HeadStyledSelect = styled.select`
 font-size: 18px;
 `

export const SharedStyles = css`
  background : transparent;
  text-align : center;
  width      : 100%;
  font-size  : 1.25rem /* 20/16 */;
  color      : var(--COLOR_white);
`

export const StyledParagraph = styled.p`
  ${ SharedStyles };
  font-weight : 600;
`

export const StyledLineEdit = styled.input.attrs( { type: 'text' } )`
  ${ SharedStyles };
  border        : none;
  border-bottom : 2px solid var(--COLOR_white);
  margin-top    : .2rem;
`