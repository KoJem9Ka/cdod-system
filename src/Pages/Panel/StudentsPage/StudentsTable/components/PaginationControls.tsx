import React, { FC }   from 'react'
import { Table }        from '@tanstack/react-table'
import { TableControl } from '../../../../../components/UIKit/Tables/subcomponents/TableControl'



const PaginationControls: FC<{ table: Table<any> }> = ( { table } ) => {
  const pagesCount = table.getPageCount()

  return (
    <>
      <TableControl disabled={ !table.getCanPreviousPage() } icon='paging_begin' onClick={ () => table.setPageIndex( 0 ) }/>
      <TableControl disabled={ !table.getCanPreviousPage() } icon='paging_prev' onClick={ () => table.previousPage() }/>
      Стр.
      <TableControl
        handler={ ( page: number ) => page >= 1 && page <= pagesCount && table.setPageIndex( page - 1 ) }
        max={ pagesCount }
        min={ 1 }
        value={ table.getState().pagination.pageIndex + 1 }
        variant='numberInput'
      />
      из&nbsp;
      { pagesCount }
      <TableControl disabled={ !table.getCanNextPage() } icon='paging_next' onClick={ () => table.nextPage() }/>
      <TableControl disabled={ !table.getCanNextPage() } icon='paging_end' onClick={ () => table.setPageIndex( pagesCount - 1 ) }/>
    </>
  )
}

export default PaginationControls


