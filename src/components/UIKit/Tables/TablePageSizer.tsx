import React, { FC } from 'react'
import { Table }     from '@tanstack/react-table'
import {
  CheckOrRadioLabel,
  ListPosAbsolute,
  TableControl
}                     from './subcomponents/TableControl'
import { uniq }       from 'lodash'



type Props = {
  // totalCount: number
  // pagination: PaginationState
  // setPagination: (pagination: PaginationState)=> void
  table: Table<any>
}
export const TablePageSizer: FC<Props> = ( { table } ) => {
  const dataCount = table.getFilteredRowModel().rows.length

  return (
    <TableControl
      hoverable={{ elem: ListPosAbsolute, display: 'flex' }}
      text={`${table.getState().pagination.pageSize}`}
      thumb='tableRows'
      title='Строк на страницу'
    >
      <ListPosAbsolute>
        {uniq( [ 10, 25, 50, 100, dataCount ] ).map( pageSize => (
          <CheckOrRadioLabel key={pageSize}>
            <input
              checked={table.getState().pagination.pageSize === pageSize}
              type='radio'
              value={pageSize}
              onChange={() => {
                table.resetPageIndex()
                table.setPageSize( pageSize )
              }}
            />
            <span>Отображать {pageSize}</span>
          </CheckOrRadioLabel>
        ) )}
      </ListPosAbsolute>
    </TableControl>
  )
}

export default TablePageSizer
