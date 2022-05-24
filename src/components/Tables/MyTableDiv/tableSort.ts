import { useMemo, useState } from 'react'
import { SimpleObject } from './types'

// type ElementOfArray<T> = T[keyof T]
//Пиздец бля какой то
export const tableSort = <Elem extends SimpleObject>(dataOriginal: Elem[]) => {
  type ElemKeys = keyof Elem & string
  type ElemValue = Elem[ElemKeys]
  type TSort = { column: ElemKeys, ascending: boolean }

  const [ sortConfig, setSortConfig ] = useState<TSort | null>( null )

  const sortFunc = (x: Elem, y: Elem, col: ElemKeys, asc: boolean): -1 | 0 | 1 => {
    let a = x[col],
      b = y[col]

    if (typeof a === 'string' && typeof b === 'string') {
      a = a.toLowerCase() as ElemValue
      b = b.toLowerCase() as ElemValue
    }

    return a === b ? 0
      : (asc ? a > b : a < b) ? 1
        : -1
  }
  const sortHandler = (column: ElemKeys) => {
    if (!sortConfig || sortConfig.column !== column)
      setSortConfig( { column, ascending: true } )
    else if (sortConfig.ascending)
      setSortConfig( { column, ascending: false } )
    else
      setSortConfig( null )
  }

  const dataSorted = useMemo<Elem[]>( () => (!sortConfig
      ? dataOriginal
      : [ ...dataOriginal ].sort( (a, b) => sortFunc( a, b, sortConfig.column || '', sortConfig.ascending ) )
  ), [ dataOriginal, sortConfig ] )

  return ({
    dataSorted,
    sortConfig,
    sortHandler,
  })
}
