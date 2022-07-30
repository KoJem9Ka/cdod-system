import React                 from 'react'
import styled                from 'styled-components'
import { CellContext }       from '@tanstack/table-core'
import { ColumnDefTemplate } from '@tanstack/react-table'
import moment                from 'moment'
import { GAllStudentsQuery } from '../../../../../other/generated'



type T = GAllStudentsQuery['students'][number]

const ColumnStudies: ColumnDefTemplate<CellContext<T, any>> = ( { row: { original: { info } }, column: { getFilterValue } } ) => {

  const filter = getFilterValue()
  const filterd = filter ? info.filter( study => study.contractState === filter ) : info

  return (
    <Col>
      { filterd.map( study => (
        <Study key={ `${ study.course.name } ${ study.attempt }` }>
          <p>{ moment( study.admissionDate ).year() }</p>
          <p>{ study.course.name }</p>
          <p>{ study.contractState }</p>
        </Study>
      ) ) }
    </Col>
  )
}

export default ColumnStudies

const Col = styled.div`
  display        : flex;
  flex-direction : column;
`

const Study = styled.div`
  display               : grid;
  grid-template-columns : repeat(3, 1fr);
`