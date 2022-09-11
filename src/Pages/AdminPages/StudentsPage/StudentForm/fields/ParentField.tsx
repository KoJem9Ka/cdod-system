import React, { FC } from 'react'
import {
  StForm,
  useStudentForm
}                    from '../../../../../store/studentForm/hooks'
import {
  GParentByIdQuery,
  GRelationType
}                    from '../../../../../other/generated'
import FormField     from '../../../../../components/UIKit/Forms/FormField'
import {
  isNil,
  keys
}                    from 'lodash'
import {
  formatDate,
  parseParentType,
  relationTypeDecoder,
  strJoinSpace
}                    from '../../../../../other/helpers'
import {
  SubTitle,
  Title
}                    from '../../../../../components/UIKit/Forms'



type QParent = GParentByIdQuery['parent']

const handlerLastName          = ( lastName: string ) => StForm.change( { parent: { lastName } } )
const handlerFirstName         = ( firstName: string ) => StForm.change( { parent: { firstName } } )
const handlerPatronymic        = ( patronymic: string ) => StForm.change( { parent: { patronymic } } )
const handlerApplyingDate      = ( applyingDate: string ) => StForm.change( { parent: { applyingDate: formatDate( applyingDate ) as string } } )
const handlerPhoneNumber       = ( phoneNumber: string ) => StForm.change( { parent: { phoneNumber } } )
const handlerSecondPhoneNumber = ( secondPhoneNumber: string ) => StForm.change( { parent: { secondPhoneNumber } } )
const handlerEmail             = ( email: string ) => StForm.change( { parent: { email } } )
const handlerSecondEmail       = ( secondEmail: string ) => StForm.change( { parent: { secondEmail } } )

const handlerRelationTypeGetId   = ( el: GRelationType ) => el
const handlerRelationTypeGetText = ( el: GRelationType ) => relationTypeDecoder[el]
const handlerRelationType        = ( relationType: GRelationType ) => StForm.change( { parent: { relationType } } )

const ParentField: FC = () => {
  const { studentIsEdit, studentModified } = useStudentForm( s => [ s.studentModified?.parent, s.studentIsEdit ] )

  if ( isNil( studentModified ) ) return <></>

  const { parent } = studentModified
  const FIO        = strJoinSpace( parent.lastName, parent.firstName, parent.patronymic )

  const fioAndRelationType = !studentIsEdit
    ? (<>
      {FIO && <SubTitle>{FIO}</SubTitle>}
    </>)
    : (<>
      <FormField
        caption='Фамилия'
        isEdit={studentIsEdit}
        text={parent.lastName}
        onEdit={handlerLastName}
      />
      <FormField
        caption='Имя'
        isEdit={studentIsEdit}
        text={parent.firstName}
        onEdit={handlerFirstName}
      />
      <FormField
        caption='Отчество'
        isEdit={studentIsEdit}
        text={parent.patronymic}
        onEdit={handlerPatronymic}
      />
      <FormField
        caption='Родственный тип'
        element={parent.relationType}
        elements={keys( relationTypeDecoder )}
        getId={handlerRelationTypeGetId}
        getText={handlerRelationTypeGetText}
        isEdit={studentIsEdit}
        variant='search'
        onSelect={handlerRelationType}
      />
    </>)

  const visibleAlways = (<>
    <FormField
      caption='Дата первого обращения'
      isEdit={studentIsEdit}
      text={parent.applyingDate}
      variant='date'
      onEdit={handlerApplyingDate}
    />
    <FormField
      caption='Телефон'
      isEdit={studentIsEdit}
      text={parent.phoneNumber}
      onEdit={handlerPhoneNumber}
    />
    <FormField
      caption='Телефон 2'
      isEdit={studentIsEdit}
      text={parent.secondPhoneNumber}
      onEdit={handlerSecondPhoneNumber}
    />
    <FormField
      caption='Почта'
      isEdit={studentIsEdit}
      text={parent.email}
      onEdit={handlerEmail}
    />
    <FormField
      caption='Почта 2'
      isEdit={studentIsEdit}
      text={parent.secondEmail}
      onEdit={handlerSecondEmail}
    />
  </>)

  return (
    <>
      <Title>{parseParentType( parent.relationType )}</Title>
      {fioAndRelationType}
      {visibleAlways}
    </>
  )
}

export default ParentField