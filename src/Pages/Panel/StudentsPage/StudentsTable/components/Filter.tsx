import {
  Column,
  Table
}                         from '@tanstack/react-table'
import React, { FC }      from 'react'
import { GContractState } from '../../../../../other/generated'



type Props = {
  column: Column<any, unknown>
  table: Table<any>
}

const Filter: FC<Props> = ( { column, table } ) => {
  if ( column.id === 'studies' ) return (
    <select onChange={ e => column.setFilterValue( e.currentTarget.value ) }>
      <option value=''>Все</option>
      <option value={ GContractState.Completed }>Закончил</option>
      <option value={ GContractState.Consideration }>На рассмотрении</option>
      <option value={ GContractState.Excluded }>Исключен</option>
      <option value={ GContractState.Left }>Ушёл</option>
      <option value={ GContractState.Rejected }>Отказ</option>
      <option value={ GContractState.Studying }>Учится</option>
    </select>
  )

  return <></>
}

export default Filter