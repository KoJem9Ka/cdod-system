import styled, { css } from 'styled-components'



const SharedPaddings = css`
  padding : 20px;
`
export const Form = styled.div`
  background     : var(--COLOR_blue);
  flex           : 0 0 385px;

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
  width          : 100%;
  display        : flex;
  flex-direction : column;
  align-items    : center;

  & > * + * {
    margin-top : 20px;
  }
`
export const FormBody = styled.div`
  ${ SharedPaddings };
  max-height : 100%;
  color      : black;
  background : white;
`
export const FormFooter = styled.div`
  ${ SharedPaddings };
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
export const TextLine = styled.p`
  background    : var(--COLOR_gray-background);
  border-radius : 0.625rem /* 10/16 */;
  padding       : 0.375rem /* 6/16 */ 0.625rem /* 10/16 */;
`