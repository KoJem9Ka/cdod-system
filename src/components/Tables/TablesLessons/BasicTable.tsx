/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { BasicTableProps } from './config'


const BasicTable: React.FC<BasicTableProps> = ({ columns, data }) => {

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
  } )

  return (
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
  )
}

export default BasicTable
