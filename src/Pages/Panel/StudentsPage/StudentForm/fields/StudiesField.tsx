import React, {
  FC,
  Fragment
}                         from 'react'
import {
  SubTitle,
  TextLine,
  Title
}                         from '../../../../../components/Forms'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'



const StudiesField: FC = () => {
  const { studentModified } = useStudentForm()
  if ( studentModified === null ) return <></>

  return (
    <>
      <Title>Обучение</Title>
      { studentModified.info.map( study => (
        <Fragment key={ `${ study.course.id } ${ study.group?.name }` }>
          <SubTitle>{ study.course.name }</SubTitle>
          <TextLine>{ study.group?.name || 'Не состоит в группе' }</TextLine>
        </Fragment>
      ) ) }
    </>
  )
}

export default StudiesField