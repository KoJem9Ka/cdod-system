import React, {
  FC,
  Fragment,
  useEffect
}                         from 'react'
import { useStudentForm } from '../../../../../store/studentsForm/hooks'
import {
  Caption,
  SubTitle,
  TextLine,
  Title
}                         from '../../../../../components/Forms'
import { isNil }          from 'lodash'
import {
  GParentsListQuery,
  GStudentQuery,
  useParentByIdLazyQuery,
  useParentByIdQuery,
  useParentsListLazyQuery
}                         from '../../../../../other/generated'
import CustomSelect       from '../../../../../components/DropDown/CustomSelect'
import { toast }          from 'react-toastify'
import { strCat }         from '../../../../../other/helpers'



type TStudentParent = GStudentQuery['student']['parent']
type TListParent = GParentsListQuery['parents'][number]

type TContact = {
  name: string
  field: string
  text: string
}

const ParentsField: FC = () => {
  const { isEdit, studentModified, changeStudent } = useStudentForm()
  const [ getParents, { data: { parents } = { parents: [] }, loading } ] = useParentsListLazyQuery()

  const { data: { parent: p } = { parent: null } } = useParentByIdQuery( { skip: studentModified === null, variables: { id: studentModified!.parent.id } } )
  const [ getParent ] = useParentByIdLazyQuery()

  useEffect( () => {
    isEdit && getParents()
  }, [ isEdit ] )

  if ( isNil( p ) ) return <></>

  if ( isEdit ) {
    return (
      <>
        <Title>Родитель</Title>
        <CustomSelect
          getOptionLabel={ ( { lastName, firstName, patronymic } ) => strCat( lastName, firstName, patronymic ) }
          getOptionValue={ par => par.id.toString() }
          options={ parents }
          value={ parent as unknown as TListParent }
          onChange={ par => {
            getParent( { variables: { id: par!.id } } )
                .then( ( { data } ) => (
                  data?.parent
                    ? changeStudent( { parent: data.parent } )
                    : toast( `Ошибка изменения родителя. Родителя с id: ${ par!.id } не удалось загрузить` )
                ) )
          } }
        />
      </>
    )
  }

  const contacts = [
    { name: 'Телефон', text: p.phoneNumber, field: 'phoneNumber' },
    { name: 'Второй Телефон', text: p.secondPhoneNumber, field: 'secondPhoneNumber' },
    { name: 'Почта', text: p.email, field: 'email' },
    { name: 'Вторая Почта', text: p.secondEmail, field: 'secondEmail' }
  ].filter( contact => !isNil( contact.text ) ) as TContact[]

  return (
    <>
      {/*<Title>{ p. }</Title>*/ }
      <SubTitle>{ strCat( p.lastName, p.firstName, p.patronymic ) }</SubTitle>
      <Caption>Дата обращения</Caption>
      <TextLine>{ p.applyingDate }</TextLine>
      { contacts.map( contact => (
        <Fragment key={ contact.name }>
          <Caption>{ contact.name }</Caption>
          <TextLine>{ contact.text }</TextLine>
        </Fragment>
      ) ) }
    </>
  )
}

export default ParentsField