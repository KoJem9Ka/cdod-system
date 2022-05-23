/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useFilters, useGlobalFilter, useTable } from 'react-table'
import FilteringTableInput from './FilteringTableInput'
import FilteringColumnInput from './FilteringColumnInput'
import { BasicTableProps } from '../config'

const FilteringTable: React.FC<BasicTableProps> = ({ columns, data }) => {

  // const defaultColumn = useMemo( () => ({
  //   Filter: FilteringColumnInput,
  // }), [] )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable( {
      columns      : useMemo( () => columns, [] ),
      data         : useMemo( () => data, [ data ] ),
      defaultColumn: useMemo( () => ({
        Filter: FilteringColumnInput,
      }), [] ),
    },
    useFilters,
    useGlobalFilter
  )

  return (
    <>
      <FilteringTableInput filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map( headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map( column => (
                  <th {...column.getHeaderProps()}>
                    {column.render( 'Header' )}
                    {column.canFilter ? column.render( 'Filter' ) : null}
                  </th>
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

export default FilteringTable
