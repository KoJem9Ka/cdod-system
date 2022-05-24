/* eslint-disable arrow-body-style */
import { useMemo, useState } from 'react'
import { SimpleObject } from '../../types'

export const tableGlobalSearch = <Elem extends SimpleObject>(dataOriginal: Elem[]) => {
  const [ search, setSearch ] = useState( '' )

  const dataSearched = useMemo<Elem[]>( () => (!search.length ? dataOriginal :
    dataOriginal.filter( elem => {
      return Object.keys( elem ).some( key => {
        const value = typeof elem[key] === 'number' ? String( elem[key] ) : elem[key]
        return typeof value !== 'string' ? false :
          value.toLowerCase().includes( search.toLowerCase() )
      } )
    } )), [ dataOriginal, search ] )

  return ({
    search,
    setSearch,
    dataSearched,
  })
}
