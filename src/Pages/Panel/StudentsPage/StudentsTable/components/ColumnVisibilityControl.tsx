import React, { FC } from 'react'
import { Table }     from '@tanstack/react-table'
import styled        from 'styled-components'



type Props = {
  table: Table<any>
}
const ColumnVisibilityControl: FC<Props> = ( { table } ) => (
  <Hoverable>
    Видимые колонки
    <List>
      { table.getAllLeafColumns().map( column => {
        const header = column.columnDef.header as string
        return (
          <CheckBoxLabel key={ column.id }>
            <input
              checked={ column.getIsVisible() }
              type='checkbox'
              onChange={ column.getToggleVisibilityHandler() }
            />
            <span>{ header }</span>
          </CheckBoxLabel>
        )
      } ) }
    </List>
  </Hoverable>
)

export default ColumnVisibilityControl

const CheckBoxLabel = styled.label`
  cursor : pointer;

  *:not(:last-child) {
    margin-right : 1rem;
  }
`

const List = styled.div`
  position       : absolute;
  display        : none;
  top            : 100%;
  z-index        : 15;
  background     : var(--COLOR_dark);
  flex-direction : column;
  width          : max-content;
  left           : 50%;
  transform      : translateX(-50%);
  gap            : 1rem;
  padding        : 1rem;
  border-radius  : 0 0 1rem 1rem;
`

const Hoverable = styled.div`
  position : relative;
  cursor   : default;

  &:hover ${ List } {
    display : flex;
  }
`