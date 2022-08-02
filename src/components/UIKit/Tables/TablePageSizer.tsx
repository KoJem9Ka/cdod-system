import React, {
  FC,
  useId
}                from 'react'
import { Table } from '@tanstack/react-table'
import {
  CheckRadioLabel,
  ListPosAbsolute,
  TableControl
}                from './subcomponents/TableControl'
import { uniq }  from 'lodash'



export const TablePageSizer: FC<{ table: Table<any> }> = ( { table } ) => {
  const dataCount = table.getPreFilteredRowModel().rows.length
  const name = useId()

  return (
    <TableControl
      hoverable={ { elem: ListPosAbsolute, display: 'flex' } }
      icon='paging_page_size'
      text={ `${ table.getState().pagination.pageSize }` }
      title='Строк на страницу'
    >
      <ListPosAbsolute>
        { uniq( [ 10, 25, 50, 100, dataCount ] ).map( pageSize => (
          <CheckRadioLabel key={ pageSize }>
            <input
              checked={ table.getState().pagination.pageSize === pageSize }
              name={ name }
              type='radio'
              value={ pageSize }
              onChange={ e => table.setPageSize( Number( e.target.value ) ) }
            />
            <span>Отображать { pageSize }</span>
          </CheckRadioLabel>
        ) ) }
      </ListPosAbsolute>
    </TableControl>
  )
}

export default TablePageSizer