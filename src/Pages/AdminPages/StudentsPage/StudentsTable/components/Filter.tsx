import {
  Column,
  Table
}                             from '@tanstack/react-table'
import React, { FC }          from 'react'
import { GContractState }     from '../../../../../other/generated'
import { contractStateParse } from '../../../../../other/helpers'



type Props = {
  column: Column<any, unknown>
  table: Table<any>
}

const Filter: FC<Props> = ( { column, table } ) => {
  if ( column.id === 'studies' ) return (
    <select onChange={ e => column.setFilterValue( e.currentTarget.value ) }>
      <option value=''>Все</option>
      <option value={ GContractState.Completed }>{ contractStateParse( GContractState.Completed ) }</option>
      <option value={ GContractState.Consideration }>{ contractStateParse( GContractState.Consideration ) }</option>
      <option value={ GContractState.Excluded }>{ contractStateParse( GContractState.Excluded ) }</option>
      <option value={ GContractState.Left }>{ contractStateParse( GContractState.Left ) }</option>
      <option value={ GContractState.Rejected }>{ contractStateParse( GContractState.Rejected ) }</option>
      <option value={ GContractState.Studying }>{ contractStateParse( GContractState.Studying ) }</option>
    </select>
  )

  return <></>
}

export default Filter