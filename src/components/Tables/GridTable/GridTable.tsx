import React, { createContext, useContext } from 'react'
import GridTableItSelf from './GridTableItSelf'
import { tableColumnSort } from './modules/tableColumnSort'
import { tableSelector } from './modules/tableSelector'
import { tableGlobalSearch } from './modules/tableGlobalSearch/tableGlobalSearch'
import { tablePagination } from './modules/tablePagination/tablePagination'
import { SimpleObject, TColumnConfig } from './types'

type TGridTableContext<T extends TGridTableExampleObject = TGridTableExampleObject> = GridTableContextProps<T> & {
  columnSortingInfo: ReturnType<typeof tableColumnSort>
  selectionInfo: ReturnType<typeof tableSelector>
  globalSearchInfo: ReturnType<typeof tableGlobalSearch>
  paginationInfo: ReturnType<typeof tablePagination>
  dataFinal: T[]
}

const context = createContext<unknown>( null )
export const useGridTableContext = () => useContext( context as React.Context<TGridTableContext> )

export type TGridTableExampleObject = SimpleObject & {
  id: number | string
}
export type GridTableContextProps<Elem extends TGridTableExampleObject> = {
  columnsConfig: readonly (TColumnConfig<Elem> & { connector: string })[]
  data: Elem[]
  paginatable?: true
  globalSearch?: true
  scrollable?: true
}

const GridTable = <Elem extends TGridTableExampleObject>({
  columnsConfig,
  data,
  globalSearch,
  paginatable,
  scrollable,
}: GridTableContextProps<Elem>) => {

  const columnSortingInfo = tableColumnSort( data )
  const selectionInfo = tableSelector( columnSortingInfo.dataSorted, columnsConfig )
  const globalSearchInfo = tableGlobalSearch( selectionInfo.dataSelected )
  const paginationInfo = tablePagination( globalSearchInfo.dataSearched, paginatable )

  const value: TGridTableContext<Elem> = {
    columnsConfig,
    data,

    globalSearch,
    paginatable,
    scrollable,

    columnSortingInfo,
    selectionInfo,
    globalSearchInfo,
    paginationInfo,

    dataFinal: paginationInfo.dataPaginated,
  }

  return (
    <context.Provider value={value}>
      <GridTableItSelf/>
    </context.Provider>
  )
}

export default GridTable
