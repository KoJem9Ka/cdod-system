import React, { FC } from 'react'
import { Table }     from '@tanstack/react-table'
import {
  CheckOrRadioLabel,
  ListPosAbsolute,
  TableControl
}                    from './subcomponents/TableControl'



export const TableColumnHider: FC<{ table: Table<any> }> = ( { table } ) => (
  <TableControl
    hoverable={ { elem: ListPosAbsolute, display: 'flex' } }
    thumb='tableColumns'
    title='Скрытие колонок'
  >
    <ListPosAbsolute>
      { table.getAllLeafColumns().map( column => (
        <CheckOrRadioLabel key={ column.id }>
          <input
            checked={ column.getIsVisible() }
            type='checkbox'
            onChange={ column.getToggleVisibilityHandler() }
          />
          <span>{ column.columnDef.header as string }</span>
        </CheckOrRadioLabel>
      ) ) }
    </ListPosAbsolute>
  </TableControl>
)
export default TableColumnHider