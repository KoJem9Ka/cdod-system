import React, {
  FC,
  useEffect
}                         from 'react'
import { useStudentForm } from '../../../../../store/studentForm/hooks'
import { isNil }          from 'lodash'
import {
  parentTypeParse,
  strJoinSpace
}                         from '../../../../../other/helpers'
import FormField          from '../FormField'
import {
  useParentByIdLazyQuery,
  useParentByIdQuery,
  useParentsListLazyQuery
}                         from '../../../../../other/generated'



type TContact = {
  name: string
  field: string
  text: string
}

const ParentsFields: FC = () => {
  const { isEdit, studentModified, changeStudent } = useStudentForm()
  const [ getParents, { data: { parents: ps } = { parents: [] } } ] = useParentsListLazyQuery()

  const { data: { parent: p } = { parent: null } } = useParentByIdQuery( { skip: studentModified === null, variables: { id: studentModified!.parent.id } } )
  const [ getParent ] = useParentByIdLazyQuery()

  useEffect( () => {
    isEdit && getParents()
  }, [ isEdit ] )

  if ( isNil( p ) ) return <></>

  if ( isEdit ) {
    return (
      <FormField
        getId={ p1 => p1.id }
        getText={ p1 => strJoinSpace( p1.lastName, p1.firstName, p1.patronymic ) }
        isEdit={ isEdit }
        title={ parentTypeParse( p.type ) }
        value={ p }
        values={ ps }
        valueType='select'
        onChange={ async p1 => void getParent( { variables: { id: p1.id } } )
            .then( ( { data } ) => void changeStudent( { parent: data!.parent } ) ) }
      />
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
      <FormField
        caption='Дата обращения'
        subtitle={ strJoinSpace( p.lastName, p.firstName, p.patronymic ) }
        title={ parentTypeParse( p.type ) }
        value={ p.applyingDate }
      />
      { contacts.map( contact => <FormField key={ contact.name } caption={ contact.name } value={ contact.text }/> ) }
    </>
  )
}

export default ParentsFields