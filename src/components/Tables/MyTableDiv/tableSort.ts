import { useState } from 'react'
import { SimpleObject } from './types'

// type ElementOfArray<T> = T[keyof T]

export const tableSort = <TArray extends SimpleObject[]>(dataOriginal: TArray) => {
  type TElem = TArray[number]
  type TDataKeys = keyof TElem
  type TSort = { column: TDataKeys, ascending: boolean }

  // const [ dataSorted, setDataSorted ] = useState<TArray>( dataOriginal.slice( 0 ) as TArray )
  const [ sortConfig, setSortConfig ] = useState<TSort | null>( null )

  const sortFunc = (x: TElem, y: TElem, byColumn: TDataKeys, asc: boolean): -1 | 0 | 1 => {
    let a = x[byColumn] ?? 0,
      b = y[byColumn] ?? 0
    if (typeof a === 'string' && typeof b === 'string') {
      a = a.toLowerCase()
      b = b.toLowerCase()
    }

    return a === b ? 0
      : (asc ? a > b : a < b) ? 1
        : -1
  }

  const dataSorted = !sortConfig ? dataOriginal :
    [ ...dataOriginal ].sort( (a, b) => sortFunc( a, b, sortConfig.column || '', sortConfig.ascending ) )

  const sortHandler = (column: TDataKeys) => {
    if (!sortConfig || sortConfig.column !== column)
      setSortConfig( { column, ascending: true } )
    else if (sortConfig.ascending)
      setSortConfig( { column, ascending: false } )
    else
      setSortConfig( null )
  }

  return ({
    dataSorted,
    sortConfig,
    sortHandler,
  })
}
