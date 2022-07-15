import React, { FC }      from 'react'
import styled             from 'styled-components'
import { GStudentsQuery } from '../GStudentsQuery'



type T = GStudentsQuery['students'][number]

type Props = {
  data: {
    row: {
      data: T
    }
  }
}

const Col = styled.div`
  display        : flex;
  flex-direction : column;
  gap            : 1rem;
  align-items    : flex-start;
`

const Studying = styled.div`
  display         : flex;
  background      : var(--COLOR_line-transparent-blue);
  border-radius   : .5rem;
  padding         : .5rem;
  gap             : 1rem;
  justify-content : space-between;

  span {
    width : max-content;
  }
`

const StudyInfo: FC<Props> = ( { data: { row: { data } } } ) => (
  <Col>
    { data.info.map( info => (
      <Studying key={ info.course.name }>
        <span>{ info.course.name }</span>
        { info.group && <span>{ info.group.name }</span> }
        <span>{ info.contractState }</span>
      </Studying>
    ) ) }
  </Col>
)



export default StudyInfo