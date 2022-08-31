import React                 from 'react'
import styled                from 'styled-components'
import { CellContext }       from '@tanstack/table-core'
import { ColumnDefTemplate } from '@tanstack/react-table'
import moment                from 'moment'
import {
  GAllStudentsQuery,
  GContractState
}                            from '../../../../../other/generated'
import {
  hexIsDark,
  parseContractState
}                            from '../../../../../other/helpers'



type T = GAllStudentsQuery['students'][number]

const ColumnStudies: ColumnDefTemplate<CellContext<T, any>> = ( { row: { original: { info } }, column: { getFilterValue } } ) => {

  const filter = getFilterValue()
  const filterd = filter ? info.filter( study => study.contractState === filter ) : info

  return (
    <Col>
      {info.map( study => (
        <Study
          key={`${study.course.name} ${study.attempt}`}
          contractState={study.contractState}
        >
          <p>{moment( study.admissionDate ).year()}</p>
          <p>{study.course.name}</p>
          <p>{parseContractState( study.contractState )}</p>
        </Study>
      ) )}
    </Col>
  )
}

export default ColumnStudies

const Study = styled.div<{ contractState: GContractState }>`
  display               : grid;
  grid-template-columns : repeat(3, auto);
  background            : ${p => parseContractState( p.contractState, 'color' )};
  color                 : ${p => (hexIsDark( parseContractState( p.contractState, 'color' ) ) ? 'white' : 'black')};
  border-radius         : 5px;
  grid-gap              : 5px;
  padding               : 4px 8px;


  p {
    white-space : nowrap;
  }

  p:first-child {
    text-align : left;
  }

  p:last-child {
    text-align : right;
  }

`

const Col = styled.div`
  display        : flex;
  flex-direction : column;

  & > *:not(:first-child) {
    margin-top : .2rem;
  }
`