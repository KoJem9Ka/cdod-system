import React, {
  FC,
  useMemo,
  useState
}                              from 'react'
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState
}                              from '@tanstack/react-table'
import {
  columns,
  studentsGlobalFilterFn
}                              from './configColumns'
import styles                  from '../../../../styles/tableStyles.module.scss'
import { useAllStudentsQuery } from '../../../../other/generated'
import { useStudentForm }      from '../../../../store/studentForm/hooks'
import { TableControl }        from '../../../../components/UIKit/Tables/subcomponents/TableControl'
import { TableHeadSeparator }  from '../../../../components/UIKit/Tables/subcomponents/TableHeadSeparator'
import TablePageSizer          from '../../../../components/UIKit/Tables/TablePageSizer'
import TableColumnHider        from '../../../../components/UIKit/Tables/TableColumnHider'
import PaginationControls      from './components/PaginationControls'
import { isEmpty }             from 'lodash'



const StudentsTable: FC       = () => {
  const { data: { students: data } = { students: [] } }   = useAllStudentsQuery()
  const [ sorting, setSorting ]                           = useState<SortingState>( [] )
  const [ columnFilters, setColumnFilters ]               = useState<ColumnFiltersState>( [] )
  const [ globalFilter, setGlobalFilter ]                 = useState( '' )
  const [ pagination, setPagination ]                     = useState<PaginationState>( { pageSize: 25, pageIndex: 0 } )
  const [ columnVisibility, setColumnVisibility ]         = useState<VisibilityState>( {
    parentFio: false,
    phone:     false,
    email:     false,
    Оплата:    false,
  } )
  const { studentSelect, studentOriginal, studentCreate } = useStudentForm()


  const table = useReactTable( {
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      pagination,
      columnVisibility,
    },

    getCoreRowModel:       getCoreRowModel(),
    getSortedRowModel:     getSortedRowModel(),
    getFilteredRowModel:   getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onSortingChange:          setSorting,
    onColumnFiltersChange:    setColumnFilters,
    onGlobalFilterChange:     setGlobalFilter,
    onPaginationChange:       setPagination,
    onColumnVisibilityChange: setColumnVisibility,

    globalFilterFn: studentsGlobalFilterFn,
  } )

  // Без "useMemo" getFilteredRowModel() весь текущий компонент циклично бесконечно ререндерится
  const dataFilteredCount = useMemo( () => table.getFilteredRowModel().rows.length, [ columnFilters, globalFilter ] )

  if ( isEmpty( data ) )
    return <></>


  return (
    <div className={styles.tableMainContainer}>
      <div className={styles.utils}>
        <TableControl thumb='add' onClick={studentCreate}/>
        <TableHeadSeparator/>
        <p>Показано: <b>{dataFilteredCount}</b> / <b>{data.length}</b></p>
        <TableHeadSeparator/>
        <TableControl
          placeholder='🔍 Поиск...'
          style={{ flexGrow: 1, width: '10ch', textAlign: 'left' }}
          value={globalFilter}
          variant='textInput'
          onChange={value => setGlobalFilter( String( value ) )}
        />
        <TableHeadSeparator/>
        <TablePageSizer pagination={pagination} setPagination={setPagination} totalCount={data.length}/>
        <TableColumnHider table={table}/>
        <TableHeadSeparator/>
        <PaginationControls table={table}/>
      </div>
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
                    {/*{header.column.getCanFilter() && (*/}
                    {/*  <StudentsTableFilter column={header.column} table={table}/>*/}
                    {/*)}*/}
                  </th>
                ) )}
              </tr>
            ) )}
          </thead>
          <tbody>
            {table.getRowModel().rows.map( row => (
              <tr
                key={row.id}
                className={row.original.id === studentOriginal?.id ? styles.selected : undefined}
                onClick={() => studentSelect( row.original.id )}
              >
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
StudentsTable.whyDidYouRender = true

export default StudentsTable