import { useMemo, useState } from 'react'
import { SimpleObject, TTableColumnsConfig } from '../types'


export const tableSelector = <Elem extends SimpleObject, TColConf extends TTableColumnsConfig<Elem>>(dataOriginal: Elem[], columnsConfig: TColConf) => {
  type TKeys = keyof Elem & string
  type TValue = Elem[TKeys]
  type TAvailableSelections = Record<string, any[] | undefined> | undefined
  type TSelectedColumns = Record<string, TValue>
  const [ selectedColumns, setSelectedColumns ] = useState<TSelectedColumns>( {} )

  const availableSelections: TAvailableSelections = useMemo( () => {
    const keys = columnsConfig.reduce<string[]>( (rezult, column) => (column.selectable ? [ ...rezult, column.connector ] : rezult), [] )
    const newAvailableSelections: NonNullable<TAvailableSelections> = {}
    keys.forEach( key => {
      const values = new Set()
      dataOriginal.forEach( obj => void values.add( obj[key] ) )
      newAvailableSelections[key] = Array.from( values ).sort()
    } )
    return newAvailableSelections
  }, [ dataOriginal, columnsConfig ] )

  const dataSelected = useMemo( () => (Object.keys( selectedColumns ).length === 0
      ? dataOriginal
      : dataOriginal.filter( elem => Object.keys( selectedColumns ).every( key => elem[key] === selectedColumns[key] ) )
  ), [ dataOriginal, selectedColumns ] )

  const selectedColumnsHandler = (key: string, value: any) => {
    if (value === 'all' && selectedColumns[key]) {
      const newSelectConfig = { ...selectedColumns }
      delete newSelectConfig[key]
      setSelectedColumns( newSelectConfig )
    } else
      setSelectedColumns( { ...selectedColumns, [key]: value } )
  }

  return ({
    selectColumn: selectedColumnsHandler,
    availableSelections,

    dataSelected,
  } as const)
}
