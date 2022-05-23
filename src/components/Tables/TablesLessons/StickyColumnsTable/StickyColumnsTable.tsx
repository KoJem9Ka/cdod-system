/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useBlockLayout, useTable } from 'react-table'
import { BasicTableProps } from '../config'
import './StickyColumnsTable.scss'
import { useSticky } from 'react-table-sticky'

const StickyColumnsTable: React.FC<BasicTableProps> = ({ columns, data }) => {

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
    useBlockLayout,
    useSticky
  )

  return (
    <div {...getTableProps()} className='table sticky' style={{ width: 1000, height: 500 }}>
      <div className='header'>
        {headerGroups.map( headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className='tr'>
            {headerGroup.headers.map( column => (
              <div {...column.getHeaderProps()} className='th'>
                {column.render( 'Header' )}
              </div>
            ) )}
          </div>
        ) )}
      </div>
      <div {...getTableBodyProps()} className='body'>
        {rows.map( row => {
          prepareRow( row )
          return (
            <div {...row.getRowProps()} className='tr'>
              {row.cells.map( cell => (
                <div {...cell.getCellProps()} className='td'>
                  {cell.render( 'Cell' )}
                </div>
              ) )}
            </div>
          )
        } )}
      </div>
      <div className='footer'>
        {footerGroups.map( footerGroup => (
          <div {...footerGroup.getHeaderGroupProps()} className='tr'>
            {footerGroup.headers.map( column => (
              <div {...column.getHeaderProps()} className='td'>
                {column.render( 'Footer' )}
              </div>
            ) )}
          </div>
        ) )}
      </div>
    </div>
  )
}

export default StickyColumnsTable
