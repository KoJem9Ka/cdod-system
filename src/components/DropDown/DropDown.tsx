import React, { PropsWithChildren } from 'react'
import styled                       from 'styled-components'



const Menu = styled.div`
  position         : fixed;
  background-color : white;
  border-radius    : 0.5rem;
  display          : flex;
  flex-direction   : column;
  overflow         : hidden;
  box-shadow       : #7c7c7c 0 1px 10px;
  margin           : 0;
  padding          : 1rem 1rem 0;
`

type DropDownProps = {} & PropsWithChildren

const DropDown: React.FC<DropDownProps> = ( { children } ) => (
  <Menu>
    { children }
  </Menu>
)

export default DropDown