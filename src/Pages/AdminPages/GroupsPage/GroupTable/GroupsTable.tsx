import React from 'react'
import { useGroupsQuery } from '../../../../other/generated'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { columns } from './configColumns'
import styles from '../../../../styles/tableStyles.module.scss'
import {GroupForm, useGroupForm} from '../../../../store/groupForm/hooks'
import { isEmpty } from 'lodash'

const GroupsTable: React.FC = () => {
	
  const { data: { groups: data } = { groups: [] } } = useGroupsQuery()
	
  const {groupOriginal} = useGroupForm(g=>[g.groupOriginal])
  const {groupSelect} = GroupForm
  
  const table = useReactTable({
    data,
    columns,
    state           : {},
    getCoreRowModel : getCoreRowModel(),
  })
  
  if ( isEmpty( data ) )
    return <></>
  
  return (
    <div className={styles.tableMainContainer}>
      <div className={styles.tableSizableContainer}>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    style={header.column.getCanSort() ? { cursor: 'pointer', userSelect: 'none' } : undefined}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc  : ' 🔼',
                      desc : ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className = {row.original.id === groupOriginal?.id ? styles.selected : undefined}
                onClick={() => groupSelect(row.original.id, row.original.course.id )}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
	
  )
}

export default GroupsTable