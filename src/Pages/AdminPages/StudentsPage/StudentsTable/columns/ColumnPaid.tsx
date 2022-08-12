import React                 from 'react'
import { ColumnDefTemplate } from '@tanstack/react-table'
import { CellContext }       from '@tanstack/table-core'
import styled, { css }       from 'styled-components'
import { isNil }             from 'lodash'
import {
  GAllStudentsQuery,
  GContractState
}                            from '../../../../../other/generated'



type T = GAllStudentsQuery['students'][number]
const ColumnPaid: ColumnDefTemplate<CellContext<T, any>> = ( { row: { original: { info } } } ) => {

  const isPaid = info.reduce<boolean | null>( ( final, cur ) => {
    const isStudying = cur.contractState === GContractState.Studying
    const isPaid1 = cur.isCoursePaid && (isNil( cur.isEquipmentPaid ) || cur.isEquipmentPaid)
    return isStudying && final === null
      ? isPaid1
      : isStudying
        ? final && isPaid1
        : final
  }, null )

  return !isNil( isPaid ) && <PaidBage isPaid={ isPaid }>
    { isPaid ? 'Оплачено' : 'Долг' }
  </PaidBage>
}

export default ColumnPaid

const PaidBage = styled.div<{ isPaid: boolean }>`
  overflow      : hidden;
  text-overflow : ellipsis;
  padding       : 0.3rem 15%;
  border-radius : 10px;

  text-align    : center;
  font-weight   : 500;

  ${ ( { isPaid } ) => (isPaid ? css`
    color      : var(--COLOR_grades-mark--great--main);
    background : var(--COLOR_grades-mark--great-back);
  ` : css`
    color      : var(--COLOR_grades-mark--bad--main);
    background : var(--COLOR_grades-mark--bad-back);
  `) }
`