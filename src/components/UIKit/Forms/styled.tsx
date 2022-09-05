import styled, { css } from 'styled-components'
import { isNil }       from 'lodash'
import { hexToRgbA } from '../../../other/helpers'



const SharedPaddings = css`
  padding : 20px;
`
export const Form = styled.div`
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
export const FormHead = styled.div`
  ${ SharedPaddings };
  width                 : 100%;
  display               : grid;
  grid-template-columns : auto auto;
  //flex-direction        : column;
  align-items           : center;
  box-shadow            : 0 0 1rem 1rem white;
  z-index               : 1;
  text-align            : center;
  grid-gap              : .5rem;

  & > svg {
    grid-row : 1 / span 2;
  }

  & > *:nth-child(2) {
    align-self : end;
  }

  & > *:nth-child(3) {
    align-self : start;
  }
`
export const FormBody = styled.div`
  ${ SharedPaddings };
  overflow-y : auto;
  max-height : 100%;
  color      : black;
  background : white;
  flex-grow  : 1;
`
export const FormFooter = styled.div`
  box-shadow : 0 0 1rem 1rem white;
  display    : flex;

  button {
    ${ SharedPaddings };
    flex-grow   : 1;
    cursor      : pointer;
    font-weight : bold;

    &[data-cancel=true] {
      background : rgb(255, 128, 128);
    }

    &:hover {
      background : rgba(0, 0, 0, 0.2);
    }
  }
`
export const Caption = styled.p`
  color     : var(--COLOR_gray-pale-punctuated);
  font-size : 0.75rem /* 12/16 */;
  margin    : 0.625rem /* 10/16 */ 0 0.375rem /* 6/16 */ 0.625rem /* 10/16 */;

  &:first-child {
    margin-top : 0;
  }
`
const sharedFont = css`
  font-size  : 0.9375rem /* 15/16 */;
  text-align : center;
  margin     : 0.625rem /* 10/16 */ 0;
`
export const Title = styled.p`
  ${ sharedFont };
  font-weight : bold;

  &:first-child {
    margin-top : 0;
  }
`
export const SubTitle = styled.p`
  ${ sharedFont };
`
export const TextLine = styled.p<{ isValid?: boolean }>`
  min-width     : 100%;
  resize        : block;
  max-width     : 100%;
  background    : var(--COLOR_gray-background);
  border-radius : 0.625rem /* 10/16 */;
  padding       : 6px 10px;

  ${ ( { isValid } ) => !(isNil( isValid ) || isValid) && css`
    padding : 4px 8px;
    border  : 2px solid red;
  `
}
`

//TODO: убрать изменение фона, если кнопка неактивна
export const FooterButton = styled.button`
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`