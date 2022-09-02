import React                from 'react'
import { useTeachersQuery } from '../../../../other/generated'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
}                           from '@tanstack/react-table'
import { columns }          from './configColumns'
import styles               from '../../../../styles/tableStyles.module.scss'



const TeachersTable: React.FC = () => {
  const { data: { teachers: data } = { teachers: [] } } = useTeachersQuery()

  const table = useReactTable( {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  } )

  return (
    <div className={styles.tableMainContainer}>
      <div className={styles.tableSizableContainer}>
        <table>
          <thead>
            {table.getHeaderGroups().map( headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map( header => (
                  <th
                    key={header.id}
                    style={header.column.getCanSort() ? { cursor: 'pointer', userSelect: 'none' } : undefined}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender( header.column.columnDef.header, header.getContext() )}
                    {{
                      asc:  ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ) )}
              </tr>
            ) )}
          </thead>
          <tbody>
            {table.getRowModel().rows.map( row => (
              <tr key={row.id}>
                {row.getVisibleCells().map( cell => (
                  <td key={cell.id}>
                    {flexRender( cell.column.columnDef.cell, cell.getContext() )}
                  </td>
                ) )}
              </tr>
            ) )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeachersTable