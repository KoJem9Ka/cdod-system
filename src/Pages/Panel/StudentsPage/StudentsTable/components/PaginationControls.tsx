import React, {
  ChangeEvent,
  FC
}                from 'react'
import { Table } from '@tanstack/react-table'
import styled    from 'styled-components'
import { uniq }  from 'lodash'



type Props = {
  table: Table<any>
}
const PaginationControls: FC<Props> = ( { table } ) => {

  const pagesCount = table.getPageCount()
  const dataCount = table.getPreFilteredRowModel().rows.length

  const onInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const nextPage = +event.currentTarget.value
    nextPage >= 1 && nextPage <= pagesCount && table.setPageIndex( nextPage - 1 )
  }

  return (
    <Flex>
      <button disabled={ !table.getCanPreviousPage() } onClick={ () => table.setPageIndex( 0 ) }>{ '<<' }</button>
      <button disabled={ !table.getCanPreviousPage() } onClick={ () => table.previousPage() }>{ '<' }</button>
      <input
        max={ pagesCount }
        min={ 1 }
        type='number'
        value={ table.getState().pagination.pageIndex + 1 }
        onChange={ onInputChange }
      />
    &nbsp;из&nbsp;{ pagesCount }
      <button disabled={ !table.getCanNextPage() } onClick={ () => table.nextPage() }>{ '>' }</button>
      <button disabled={ !table.getCanNextPage() } onClick={ () => table.setPageIndex( pagesCount - 1 ) }>{ '>>' }</button>
      <select
        value={ table.getState().pagination.pageSize }
        onChange={ e => table.setPageSize( Number( e.target.value ) ) }
      >
        { uniq( [ 10, 25, 50, 100, dataCount ] ).map( pageSize => (
          <option key={ pageSize } value={ pageSize }>
          Отображать { pageSize }
          </option>
        ) ) }
      </select>
    </Flex>
  )
}

export default PaginationControls

const Flex = styled.div`
  display : flex;
  gap     : .2rem;

  button {
    padding : .2rem 1rem;
    cursor  : pointer;
  }

  input {
    text-align : center;
  }
`