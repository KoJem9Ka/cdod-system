/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useColumnOrder, useTable } from 'react-table'
import { BasicTableProps } from './config'
import { TStudent } from '../../../store/students/types'


const ColumnOrderTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable( {
      columns: useMemo( () => columns, [] ),
      data   : useMemo( () => data, [ data ] ),
    },
    useColumnOrder
  )

  const changeOrderHandler = () => {
    setColumnOrder( [
      'id',
      // 'patronymic',
      // 'birth_date',
      // 'course',
      // 'group',
      // 'phone_number',
      // 'notes',
      // 'paid',
      // 'materials_paid',
      'request_date',
      'contract_status'
    ] as (keyof TStudent)[] )
  }

  return (
    <>
      <button onClick={changeOrderHandler}>Изменить порядок столбцов</button>
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

export default ColumnOrderTable
