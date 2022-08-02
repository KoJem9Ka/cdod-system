import React, { FC } from 'react'
import { Table }     from '@tanstack/react-table'
import {
  CheckRadioLabel,
  ListPosAbsolute,
  TableControl
}                    from './subcomponents/TableControl'



export const TableColumnHider: FC<{ table: Table<any> }> = ( { table } ) => (
  <TableControl
    hoverable={ { elem: ListPosAbsolute, display: 'flex' } }
    icon={ 'column_hider' }
    title='Скрытие колонок'
  >
    <ListPosAbsolute>
      { table.getAllLeafColumns().map( column => (
        <CheckRadioLabel key={ column.id }>
          <input
            checked={ column.getIsVisible() }
            type='checkbox'
            onChange={ column.getToggleVisibilityHandler() }
          />
          <span>{ column.columnDef.header as string }</span>
        </CheckRadioLabel>
      ) ) }
    </ListPosAbsolute>
  </TableControl>
)
export default TableColumnHider