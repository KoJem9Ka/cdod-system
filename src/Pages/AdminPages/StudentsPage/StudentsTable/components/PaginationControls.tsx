import React, {
  FC,
  memo
}                       from 'react'
import { Table }        from '@tanstack/react-table'
import { TableControl } from '../../../../../components/UIKit/Tables/subcomponents/TableControl'
import { isEqual }      from 'lodash'



const PaginationControls: FC<{ table: Table<any> }> = ( { table } ) => {
  const pagesCount = table.getPageCount()

  return (
    <>
      <TableControl disabled={ !table.getCanPreviousPage() } thumb='goBegin' onClick={ () => table.setPageIndex( 0 ) }/>
      <TableControl disabled={ !table.getCanPreviousPage() } thumb='goPrev' onClick={ () => table.previousPage() }/>
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
      <TableControl disabled={ !table.getCanNextPage() } thumb='goNext' onClick={ () => table.nextPage() }/>
      <TableControl disabled={ !table.getCanNextPage() } thumb='goEnd' onClick={ () => table.setPageIndex( pagesCount - 1 ) }/>
    </>
  )
}

export default PaginationControls


