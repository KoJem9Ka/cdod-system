/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'
import { BasicTableProps } from './config'

const SortingTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable( {
      columns: useMemo( () => columns, [] ),
      data   : useMemo( () => data, [ data ] ),
    },
    useSortBy
  )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map( headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map( column => (
              <th {...column.getHeaderProps( column.getSortByToggleProps() )}>
                {column.render( 'Header' )}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' ▲'
                      : ' ▼'
                    : ''}
                </span>
              </th>
            ) )}
          </tr>
        ) )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map( (row, i) => {
          prepareRow( row )
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map( cell => (
                <td {...cell.getCellProps()}>{cell.render( 'Cell' )}</td>
              ) )}
            </tr>
          )
        } )
        }
      </tbody>
      <tfoot>
        {footerGroups.map( group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map( column => (
              <td {...column.getHeaderProps( column.getSortByToggleProps() )}>
                {column.render( 'Header' )}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' ▲'
                      : ' ▼'
                    : ''}
                </span>
              </td>
            ) )}
          </tr>
        ) )}
      </tfoot>
    </table>
  )
}

export default SortingTable
