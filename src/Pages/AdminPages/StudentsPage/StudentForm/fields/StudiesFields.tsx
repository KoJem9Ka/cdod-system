import React, { FC }      from 'react'
import { Title }          from '../../../../../components/UIKit/Forms'
import { useStudentForm } from '../../../../../store/studentForm/hooks'
import { GContractState } from '../../../../../other/generated'
import styled             from 'styled-components'
import {
  contractStateParse,
  hexIsDark
}                         from '../../../../../other/helpers'



const StudyCardStyled = styled.div<{ contractState: GContractState }>`
  width         : 100%;
  padding       : 10px;
  background    : ${ p => contractStateParse( p.contractState, 'color' ) };
  color         : ${ p => (hexIsDark( contractStateParse( p.contractState, 'color' ) ) ? 'white' : 'black') };
  border-radius : 10px;

  div {
    display         : flex;
    justify-content : space-between;

    &:not(:first-child) {
      margin-top : 5px;
    }
  }

  &:not(:first-child) {
    margin-top : 10px;
  }
`

type StudyCardProps = {
  courseName: string
  contractState: GContractState
  groupName: string | undefined
  admissionDate: string
}
const StudyCard: FC<StudyCardProps> = ( { courseName, groupName, admissionDate, contractState } ) => (
  <StudyCardStyled contractState={ contractState }>
    <div>
      <span style={ { fontWeight: 600 } }>{ courseName }</span>
      <span>{ groupName || 'Без группы' }</span>
    </div>
    <div>
      <span>{ contractStateParse( contractState ) }</span>
      <span>{ admissionDate }</span>
    </div>
  </StudyCardStyled>
)


export const StudiesFields: FC = () => {
  const { studentModified } = useStudentForm()
  if ( studentModified === null ) return <></>

  return (
    <>
      <Title>Обучение</Title>
      { studentModified.info.map( study => (
        <StudyCard
          key={ `${ study.course.id }_${ study.attempt }` }
          admissionDate={ study.admissionDate }
          contractState={ study.contractState }
          courseName={ study.course.name }
          groupName={ study.group?.name }
        />
      ) ) }
    </>
  )
}