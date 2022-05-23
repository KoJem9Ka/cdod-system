import { useEffect, useMemo, useState } from 'react'
import { SimpleObject } from './types'


export const tableSelector = <TArray extends SimpleObject[]>(dataOriginal: TArray) => {
  type TElemObject = TArray[number]
  type TElemObjectValue = TElemObject[string]
  type TSelectConfig = Record<string, TElemObjectValue>
  type TSelections = Record<string, any[] | undefined>

  const [ columnSelections, setColumnSelections ] = useState<TSelections>()
  const [ selectConfig, setSelectConfig ] = useState<TSelectConfig>( {} )

  const dataSelected = useMemo( () => (Object.keys( selectConfig ).length === 0 ? dataOriginal :
    dataOriginal.filter( elem => Object.keys( selectConfig ).every( key => elem[key] === selectConfig[key] ) ))
  , [ dataOriginal, selectConfig ] ) as TArray

  const selectConfigHandler = (key: string, value: any) => {
    if (value === 'all' && selectConfig[key]) {
      const newSelectConfig = { ...selectConfig }
      delete newSelectConfig[key]
      setSelectConfig( newSelectConfig )
    }
    else
      setSelectConfig( { ...selectConfig, [key]: value } )
  }

  useEffect( () => {
    const keys = Object.keys( dataOriginal[0] || {} )
    const bubilda: TSelections = {}
    keys.forEach( key => {
      const values = new Set()
      dataOriginal.forEach( obj => values.add( obj[key] ) )
      bubilda[key] = Array.from( values )
    } )
    setColumnSelections( bubilda )
  }, [ dataOriginal ] )


  return ({
    selectConfig,
    setSelectConfig: selectConfigHandler,

    columnSelections,

    dataSelected,
  })
}
