export {}
// import React, { FC }      from 'react'
// import styled             from 'styled-components'
// import { GStudentsQuery } from '../../../../other/generated'
// import moment             from 'moment'
//
//
//
// type T = GStudentsQuery['students'][number]
//
// type Props = {
//   data: {
//     row: {
//       data: T
//     }
//   }
// }
//
// const Col = styled.div`
//   display        : flex;
//   flex-direction : column;
//   gap            : 1rem;
//   //align-items    : flex-start;
//   align-items    : stretch;
// `
//
// const Studying = styled.div`
//   //display         : flex;
//   display               : grid;
//   grid-template-columns : repeat(3, 1fr);
//   background            : var(--COLOR_line-transparent-blue);
//   border-radius         : .5rem;
//   padding               : .5rem;
//   gap                   : .5rem;
//   justify-content       : space-between;
//   overflow              : hidden;
//
//
//   span {
//     text-overflow : ellipsis;
//     white-space   : nowrap;
//   }
//
//   span:nth-child(2) {
//     text-align : center;
//   }
//
//   span:last-child {
//     text-align : right;
//   }
// `
//
// const StudyInfo: FC<Props> = ( { data: { row: { data } } } ) => (
//   <Col>
//     { data.info.map( info => (
//       <Studying key={ info.course.name }>
//         <span>{ moment( info.admissionDate ).year() }</span>
//         <span>{ info.course.name }</span>
//         {/*{ info.group && <span>{ info.group.name }</span> }*/ }
//         <span>{ info.contractState }</span>
//       </Studying>
//     ) ) }
//   </Col>
// )
//
//
// export default StudyInfo