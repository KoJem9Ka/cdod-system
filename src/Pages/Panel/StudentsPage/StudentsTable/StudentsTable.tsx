import React, {
  FC,
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
}                              from './config'
import styles                  from '../../../../styles/tableStyles.module.scss'
import Filter                  from './components/Filter'
import DebouncedInput          from './components/DebounceInput'
import PaginationControls      from './components/PaginationControls'
import ColumnVisibilityControl from './components/ColumnVisibilityControl'
import { useAllStudentsQuery } from '../../../../other/generated'
import { useStudentForm }      from '../../../../store/studentForm/hooks'



const StudentsTable: FC = () => {
  const { data: { students: data } = { students: [] } } = useAllStudentsQuery()
  const [ sorting, setSorting ] = useState<SortingState>( [] )
  const [ columnFilters, setColumnFilters ] = useState<ColumnFiltersState>( [] )
  const [ globalFilter, setGlobalFilter ] = useState( '' )
  const [ pagination, setPagination ] = useState<PaginationState>( { pageSize: 25, pageIndex: 0 } )
  const [ columnVisibility, setColumnVisibility ] = useState<VisibilityState>( {} )
  const { selectStudent } = useStudentForm()

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

  return (
    <div className={ styles.tableMainContainer }>
      <div className={ styles.utils }>
        <p>Всего: { table.getFilteredRowModel().rows.length } / { data.length }</p>
        <DebouncedInput
          placeholder={ 'Поиск' }
          value={ globalFilter }
          onChange={ value => setGlobalFilter( String( value ) ) }
        />
        <PaginationControls table={ table }/>
        <ColumnVisibilityControl table={ table }/>
      </div>
      <div className={ styles.tableSizableContainer }>
        <table>
          <thead>
            { table.getHeaderGroups().map( headerGroup => (
              <tr key={ headerGroup.id }>
                { headerGroup.headers.map( header => (
                  <th
                    key={ header.id }
                    style={ header.column.getCanSort() ? { cursor: 'pointer', userSelect: 'none' } : undefined }
                    onClick={ header.column.getToggleSortingHandler() }
                  >
                    { flexRender( header.column.columnDef.header, header.getContext() ) }
                    { {
                      asc:  ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null }
                    { header.column.getCanFilter() ? (
                      <div>
                        <Filter column={ header.column } table={ table }/>
                      </div>
                    ) : null }
                  </th>
                ) ) }
              </tr>
            ) ) }
          </thead>
          <tbody>
            { table.getRowModel().rows.map( row => (
              <tr
                key={ row.id }
                onClick={ () => selectStudent( row.original.id ) }
              >
                { row.getVisibleCells().map( cell => (
                  <td key={ cell.id }>
                    { flexRender( cell.column.columnDef.cell, cell.getContext() ) }
                  </td>
                ) ) }
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

StudentsTable.whyDidYouRender = true

export default StudentsTable