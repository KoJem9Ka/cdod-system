import React, { FC } from 'react'
import { Table } from '@tanstack/react-table'
import { TableControl } from '../../../../../components/UIKit/Tables/subcomponents/TableControl'



const PaginationControls: FC<{ table: Table<any> }> = ({
  table: {
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    getState,
    nextPage,
    previousPage,
    setPageIndex,
  },
}) => {
  const pagesCount = getPageCount()
  const cantPrev = !getCanPreviousPage()

  const cantNext = !getCanNextPage()
  return (
    <>
      <TableControl disabled={cantPrev} thumb='goBegin' onClick={() => setPageIndex(0)} />
      <TableControl disabled={cantPrev} thumb='goPrev' onClick={() => previousPage()} />
      Стр.
      <TableControl
        handler={(page: number) => page >= 1 && page <= pagesCount && setPageIndex(page - 1)}
        max={pagesCount}
        min={1}
        value={getState().pagination.pageIndex + 1}
        variant='numberInput'
      />
      из&nbsp;
      {pagesCount}
      <TableControl disabled={cantNext} thumb='goNext' onClick={() => nextPage()} />
      <TableControl disabled={cantNext} thumb='goEnd' onClick={() => setPageIndex(pagesCount - 1)} />
    </>
  )
}

export default PaginationControls


