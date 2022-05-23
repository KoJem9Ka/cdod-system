/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useRowSelect, useTable } from 'react-table'
import RowSelectionTableCheckbox from './RowSelectionTableCheckbox'
import { BasicTableProps } from '../config'

const RowSelectionTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable( {
      columns: useMemo( () => columns, [] ),
      data   : useMemo( () => data, [ data ] ),
    },
    useRowSelect,
    hooks => void hooks.visibleColumns.push( visibleColumns => ([
      {
        id    : 'selection',
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <RowSelectionTableCheckbox {...getToggleAllRowsSelectedProps()}/>
        ),
        Cell  : ({ row }: any) => (
          <RowSelectionTableCheckbox {...row.getToggleRowSelectedProps()}/>
        ),
      },
      ...visibleColumns
    ]) )
  )

  return (
    <>
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
            rows.map( row => {
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
        <tfoot>
          {footerGroups.map( group => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map( column => (
                <td {...column.getFooterProps()}>{column.render( 'Footer' )}</td>
              ) )}
            </tr>
          ) )}
        </tfoot>
      </table>
      <code>
        {JSON.stringify( selectedFlatRows.map( row => (row.original) ), null, 4 )}
      </code>
    </>
  )
}

export default RowSelectionTable
