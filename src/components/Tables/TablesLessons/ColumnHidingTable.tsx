/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { BasicTableProps } from './config'
import RowSelectionTableCheckbox from './RowSelectionTable/RowSelectionTableCheckbox'


const ColumnHidingTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable( {
    columns: useMemo( () => columns, [] ),
    data   : useMemo( () => data, [ data ] ),
  } )

  return (
    <>
      <div>
        <div>
          <label>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            <RowSelectionTableCheckbox {...getToggleHideAllColumnsProps()}/>
            &nbsp;Toggle All
          </label>
        </div>
        {allColumns.map( column => (
          <div key={column.id}>
            <label>
              <input type='checkbox' {...column.getToggleHiddenProps()}/>
              {<>{column.Header}</>}
            </label>
          </div>
        ) )}
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
    </>
  )
}

export default ColumnHidingTable
