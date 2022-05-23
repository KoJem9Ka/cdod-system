/* eslint-disable arrow-body-style */
import { useState } from 'react'
import { SimpleObject } from './types'

export const tableSearch = <TDataArray extends SimpleObject[]>(dataOriginal: TDataArray) => {
  const [ search, setSearch ] = useState( '' )

  const dataSearched = !search.length ? dataOriginal :
    dataOriginal.filter( (elem, i) => {
      const keys = Object.keys( elem )
      return -1 !== keys.findIndex( key => {
        const value = typeof elem[key] === 'number' ? String( elem[key] ) : elem[key]
        return typeof value !== 'string' ? '' :
          value.toLowerCase().includes( search.toLowerCase() )
      } )
    } ) as TDataArray

  return ({
    search,
    setSearch,
    dataSearched,
  })
}
