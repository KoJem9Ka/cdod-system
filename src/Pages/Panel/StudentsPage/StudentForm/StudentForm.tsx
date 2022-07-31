import React, { FC }                  from 'react'
import { useStudentForm }             from '../../../../store/studentForm/hooks'
import { ReactComponent as UserLogo } from '../../../../assets/img/userLogo.svg'
import {
  EditableFIO,
  Form,
  FormBody,
  FormFooter,
  FormHead
}                                     from '../../../../components/Forms'
import { useStudentFormQuery }        from '../../../../other/generated'
import {
  humanizeDate,
  strJoinSpace
}                                     from '../../../../other/helpers'
import {
  FooterButtons,
  ParentsFields,
  StudiesFields
}                                     from '.'
import FormField                      from './FormField'
import styled                         from 'styled-components'



const HeadTitle = styled.p`
  font-size : 1.4rem;
  color     : var(--COLOR_white);
`

const StudentForm: FC = () => {
  const {
    loading: queryLoading,
    data:    { schools } = { schools: [] },
    error,
  } = useStudentFormQuery()

  const {
    studentOriginal,
    studentModified,
    studentLoading,
    changeStudent,
    isEdit,
  } = useStudentForm()
  if ( studentLoading ) return (<Form><h2>Loading</h2></Form>)
  if ( studentModified === null || studentOriginal === null ) return <></>

  const fio = strJoinSpace( studentModified.lastName, studentModified.firstName, studentModified.patronymic )

  return (
    <Form>
      <FormHead>
        <UserLogo/>
        {/*{ !isEdit && fio && <HeadTitle>{ fio }</HeadTitle> }*/ }
        <EditableFIO
          isEdit={ isEdit }
          setValues={ changeStudent }
          values={ { lastName: studentModified.lastName, firstName: studentModified.firstName, patronymic: studentModified.patronymic } }
        />
        { studentModified.birthDate && <p style={ { fontSize: 18 } }>{ humanizeDate( studentModified.birthDate, 'floor' ) }</p> }
      </FormHead>
      <FormBody>
        {/*{ isEdit && <>*/ }
        {/*  <FormField*/ }
        {/*    caption='Фамилия'*/ }
        {/*    isEdit={ true }*/ }
        {/*    value={ studentModified.lastName }*/ }
        {/*    onChange={ lastName => changeStudent( { lastName } ) }*/ }
        {/*  />*/ }
        {/*  <FormField*/ }
        {/*    caption='Имя'*/ }
        {/*    isEdit={ true }*/ }
        {/*    value={ studentModified.firstName }*/ }
        {/*    onChange={ firstName => changeStudent( { firstName } ) }*/ }
        {/*  />*/ }
        {/*  <FormField*/ }
        {/*    caption='Отчество'*/ }
        {/*    isEdit={ true }*/ }
        {/*    value={ studentModified.patronymic }*/ }
        {/*    onChange={ patronymic => changeStudent( { patronymic } ) }*/ }
        {/*  />*/ }
        {/*</> }*/ }
        <FormField
          caption='Дата рождения'
          isEdit={ isEdit }
          value={ studentModified.birthDate as string }
          valueType='date'
          onChange={ value => void changeStudent( { birthDate: value } ) }
        />
        <FormField
          caption='Школа'
          getId={ val => val.id }
          getText={ val => val.name }
          isEdit={ isEdit }
          value={ studentModified.school }
          values={ schools }
          valueType='select'
          onChange={ school => changeStudent( { school } ) }
        />
        <FormField
          caption={ 'Заметки' }
          isEdit={ isEdit }
          value={ studentModified.description }
          valueType='textarea'
          onChange={ description => changeStudent( { description } ) }
        />
        <ParentsFields/>
        <StudiesFields/>
      </FormBody>
      <FormFooter>
        <FooterButtons/>
      </FormFooter>
    </Form>
  )
}

export default StudentForm