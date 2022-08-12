import React, { FC }      from 'react'
import { useStudentForm } from '../../../../../store/studentForm/hooks'
import {
  GParentByIdQuery,
  GRelationType
}                         from '../../../../../other/generated'
import FormField          from '../../../../../components/UIKit/Forms/FormField'
import {
  isNil,
  toPairs
}                         from 'lodash'
import {
  formatDate,
  parseParentType,
  relationTypeDecoder,
  strJoinSpace
}                         from '../../../../../other/helpers'
import {
  SubTitle,
  Title
}                         from '../../../../../components/UIKit/Forms'



type QParent = GParentByIdQuery['parent']

const ParentField: FC = props => {
  const { studentIsEdit, studentModified, studentChange } = useStudentForm()

  if ( isNil( studentModified ) ) return <></>

  const parent = studentModified.parent


  const fioAndRelationType = !studentIsEdit
    ? (<>
      <SubTitle>{ strJoinSpace( parent.lastName, parent.firstName, parent.patronymic ) }</SubTitle>
    </>)
    : (<>
      <FormField
        caption='Фамилия'
        isEdit={ studentIsEdit }
        value={ parent.lastName }
        onChange={ lastName => studentChange( { parent: { lastName } } ) }
      />
      <FormField
        caption='Имя'
        isEdit={ studentIsEdit }
        value={ parent.firstName }
        onChange={ firstName => studentChange( { parent: { firstName } } ) }
      />
      <FormField
        caption='Отчество'
        isEdit={ studentIsEdit }
        value={ parent.patronymic }
        onChange={ patronymic => studentChange( { parent: { patronymic } } ) }
      />
      <FormField
        caption='Родственный тип'
        getId={ obj => obj.type as GRelationType }
        getText={ obj => obj.text }
        isEdit={ studentIsEdit }
        value={ { type: parent.relationType, text: parseParentType( parent.relationType ) } }
        values={ toPairs( relationTypeDecoder ).map( ( [ type, text ] ) => ({ type, text }) ) }
        valueType='select'
        onChange={ obj => studentChange( { parent: { relationType: obj.type } } ) }
      />
    </>)


  const visibleAlways = (<>
    <FormField
      caption='Дата первого обращения'
      isEdit={ studentIsEdit }
      value={ parent.applyingDate }
      valueType='date'
      onChange={ applyingDate => studentChange( { parent: { applyingDate: formatDate( applyingDate ) as string } } ) }
    />
    <FormField
      caption='Телефон'
      isEdit={ studentIsEdit }
      value={ parent.phoneNumber }
      onChange={ phoneNumber => studentChange( { parent: { phoneNumber } } ) }
    />
    <FormField
      caption='Телефон 2'
      isEdit={ studentIsEdit }
      value={ parent.secondPhoneNumber }
      onChange={ secondPhoneNumber => studentChange( { parent: { secondPhoneNumber } } ) }
    />
    <FormField
      caption='Почта'
      isEdit={ studentIsEdit }
      value={ parent.email }
      onChange={ email => studentChange( { parent: { email } } ) }
    />
    <FormField
      caption='Почта 2'
      isEdit={ studentIsEdit }
      value={ parent.secondEmail }
      onChange={ secondEmail => studentChange( { parent: { secondEmail } } ) }
    />
  </>)

  return (
    <>
      <Title>{ parseParentType( parent.relationType ) }</Title>
      { fioAndRelationType }
      { visibleAlways }
    </>
  )
}

export default ParentField