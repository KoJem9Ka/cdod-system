import React, {
  FC,
  useId
}                          from 'react'
import { PaginationState } from '@tanstack/react-table'
import {
  CheckRadioLabel,
  ListPosAbsolute,
  TableControl
}                          from './subcomponents/TableControl'
import { uniq }            from 'lodash'



type Props = {
  totalCount: number
  pagination: PaginationState
  setPagination: ( pagination: PaginationState )=> void
}
export const TablePageSizer: FC<Props> = ( { totalCount, pagination, setPagination } ) => {
  const dataCount = totalCount
  const name = useId()

  return (
    <TableControl
      hoverable={ { elem: ListPosAbsolute, display: 'flex' } }
      text={ `${ pagination.pageSize }` }
      thumb='tableRows'
      title='Строк на страницу'
    >
      <ListPosAbsolute>
        { uniq( [ 10, 25, 50, 100, dataCount ] ).map( pageSize => (
          <CheckRadioLabel key={ pageSize }>
            <input
              checked={ pagination.pageSize === pageSize }
              name={ name }
              type='radio'
              value={ pageSize }
              onChange={ e => setPagination( { ...pagination, pageSize: Number( e.target.value ) } ) }
            />
            <span>Отображать { pageSize }</span>
          </CheckRadioLabel>
        ) ) }
      </ListPosAbsolute>
    </TableControl>
  )
}

export default TablePageSizer