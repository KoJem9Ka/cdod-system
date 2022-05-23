/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { usePagination, useTable } from 'react-table'
import { BasicTableProps } from './config'

const PaginationTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
    gotoPage,
    pageCount,
    prepareRow,
  } = useTable( {
      columns     : useMemo( () => columns, [] ),
      data        : useMemo( () => data, [ data ] ),
      initialState: {},
    },
    usePagination
  )

  return (
    <>
      <div>
        <p>
          Страница&nbsp;
          <input
            max={pageCount}
            min={0}
            style={{ width: '3rem' }}
            type='number'
            value={pageIndex + 1}
            onChange={e => {
              const newPage = +e.currentTarget.value
              gotoPage( newPage - 1 )
            }}
          />
          &nbsp;из&nbsp;
          {pageCount}
          , по&nbsp;
          <select
            value={pageSize}
            onChange={e => {
              setPageSize( +e.currentTarget.value )
            }}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>50</option>
            <option value='100'>100</option>
            <option value={data.length}>{data.length}</option>
          </select>
          &nbsp;на каждой
        </p>
        <button disabled={!canPreviousPage} onClick={gotoPage.bind( null, 0 )}>{'<<'}</button>
        <button disabled={!canPreviousPage} onClick={previousPage}>Назад</button>
        <button disabled={!canNextPage} onClick={nextPage}>Вперёд</button>
        <button disabled={!canNextPage} onClick={gotoPage.bind( null, pageCount - 1 )}>{'>>'}</button>
      </div>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map( headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map( column => (
                  <th {...column.getHeaderProps()}>{column.render( 'Header' )}</th>
                ) )}
              </tr>
            ) )
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map( row => {
              prepareRow( row )
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map( cell => (
                    <td {...cell.getCellProps()}>{cell.render( 'Cell' )}</td>
                  ) )
                  }
                </tr>
              )
            } )
          }
        </tbody>
      </table>
    </>
  )
}

export default PaginationTable
