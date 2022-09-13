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
} from '@tanstack/react-table'
import { isEmpty } from 'lodash'
import {
  CSSProperties,
  FC,
  useCallback,
  useMemo,
  useState
} from 'react'
import { TableControl } from '../../../../components/UIKit/Tables/subcomponents/TableControl'
import { TableHeadSeparator } from '../../../../components/UIKit/Tables/subcomponents/TableHeadSeparator'
import TableColumnHider from '../../../../components/UIKit/Tables/TableColumnHider'
import TablePageSizer from '../../../../components/UIKit/Tables/TablePageSizer'
import { useWatcher } from '../../../../hooks/useWatcher'
import { useAllStudentsQuery } from '../../../../other/generated'
import {
  StForm,
  useStudentForm
} from '../../../../store/studentForm/hooks'
import styles from '../../../../styles/tableStyles.module.scss'
import PaginationControls from './components/PaginationControls'
import {
  columns,
  studentsGlobalFilterFn
} from './configColumns'



const SearchStyle: CSSProperties = { flexGrow: 1, width: '10ch', textAlign: 'left' }



const StudentsTable: FC = () => {
  const { data: { students: data } = { students: [] } } = useAllStudentsQuery()
  const [ sorting, setSorting ]                         = useState<SortingState>( [] )
  const [ columnFilters, setColumnFilters ]             = useState<ColumnFiltersState>( [] )
  const [ globalFilter, setGlobalFilter ]               = useState( '' )
  const [ pagination, setPagination ]                   = useState<PaginationState>( { pageSize: 25, pageIndex: 0 } )
  const [ columnVisibility, setColumnVisibility ]       = useState<VisibilityState>( {
    parentFio : false,
    phone     : false,
    email     : false,
    Оплата    : false,
  } )

  const { studentOriginal } = useStudentForm( s => s.studentOriginal )
  
  useWatcher(data, () => {
    if (isEmpty(data)) return
    const pageIndex = Math.max(0, Math.floor(data.findIndex(st => st.id === studentOriginal?.id) / pagination.pageSize))
    setPagination({
      pageSize : pagination.pageSize,
      pageIndex,
    })
  } )

  const table = useReactTable( {
    data,
    columns,
    state : {
      sorting,
      columnFilters,
      globalFilter,
      pagination,
      columnVisibility,
    },

    getCoreRowModel       : getCoreRowModel(),
    getSortedRowModel     : getSortedRowModel(),
    getFilteredRowModel   : getFilteredRowModel(),
    getPaginationRowModel : getPaginationRowModel(),

    onSortingChange          : setSorting,
    onColumnFiltersChange    : setColumnFilters,
    onGlobalFilterChange     : setGlobalFilter,
    onPaginationChange       : setPagination,
    onColumnVisibilityChange : setColumnVisibility,

    globalFilterFn : studentsGlobalFilterFn,
  } )

  // Без "useMemo" getFilteredRowModel() весь текущий компонент циклично бесконечно ререндерится
  const dataFilteredCount = useMemo( () => table.getFilteredRowModel().rows.length, [ columnFilters, globalFilter, data.length ] )

  const handlerSearch = useCallback( ( value: string | number ): void => {
    // setPagination({ ...pagination, pageIndex: 0 })
    setGlobalFilter( String( value ) )
  }, [ /*setPagination,*/ setGlobalFilter ] )

  if ( isEmpty( data ) )
    return <></>

  return (
    <div className={styles.tableMainContainer}>
      <div className={styles.utils}>
        <TableControl thumb='add' onClick={StForm.create}/>
        <TableHeadSeparator/>
        <p>Показано: <b>{dataFilteredCount}</b> / <b>{data.length}</b></p>
        <TableHeadSeparator/>
        <TableControl
          placeholder='🔍 Поиск...'
          style={SearchStyle}
          value={globalFilter}
          variant='textInput'
          onChange={handlerSearch}
        />
        <TableHeadSeparator/>
        <TablePageSizer table={table}/>
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
                      asc  : ' 🔼',
                      desc : ' 🔽',
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
                onClick={() => StForm.select( row.original.id )}
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
// StudentsTable.whyDidYouRender = true

export default StudentsTable