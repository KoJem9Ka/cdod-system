import React, {
  FC,
  useState
}                              from 'react'
import {
  ColumnFiltersState,
  FilterFnOption,
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
  T
}                              from './columns'
import styles                  from '../../../../styles/tableStyles.module.scss'
import { isNil }               from 'lodash'
import Filter                  from './components/Filter'
import DebouncedInput          from './components/DebounceInput'
import PaginationControls      from './components/PaginationControls'
import ColumnVisibilityControl from './components/ColumnVisibilityControl'
import { useAllStudentsQuery } from '../../../../other/generated'
import { useStudentForm }      from '../../../../store/studentsForm/hooks'



const studentsGlobalFilterFn: FilterFnOption<T> = (
  { original: { lastName, firstName, patronymic, birthDate, description, info, parent } },
  columnId,
  filterValue: string,
  addMeta
) => filterValue.toLowerCase().replace( /\s+/g, ' ' ).trim().split( ' ' ).every( value => (
  [
    lastName,
    firstName,
    patronymic,
    birthDate,
    description,
    parent.lastName,
    parent.firstName,
    parent.patronymic,
    parent.phoneNumber,
    parent.secondPhoneNumber,
    parent.email,
    parent.secondEmail,
    parent.applyingDate
  ].some( val => !isNil( val ) && val.toLowerCase().includes( value ) )
  ||
  info.some( study => study.course.name.toLowerCase().includes( value ) || study.admissionDate.includes( value ) )
) )

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
          {/*<tfoot>*/ }
          {/*  { table.getFooterGroups().map( footerGroup => (*/ }
          {/*    <tr key={ footerGroup.id }>*/ }
          {/*      { footerGroup.headers.map( header => (*/ }
          {/*        <th key={ header.id }>*/ }
          {/*          { flexRender( header.column.columnDef.footer, header.getContext() ) }*/ }
          {/*        </th>*/ }
          {/*      ) ) }*/ }
          {/*    </tr>*/ }
          {/*  ) ) }*/ }
          {/*</tfoot>*/ }
        </table>
      </div>
    </div>
  )
}

// StudentsTable.whyDidYouRender = true

export default StudentsTable