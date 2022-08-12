import React, { FC }                  from 'react'
import { useStudentForm }             from '../../../../store/studentForm/hooks'
import { ReactComponent as UserLogo } from '../../../../assets/img/userLogo.svg'
import {
  EditableFIO,
  Form,
  FormBody,
  FormFooter,
  FormHead
}                                     from '../../../../components/UIKit/Forms'
import { useStudentFormQuery }        from '../../../../other/generated'
import {
  humanizeDate,
  strJoinSpace
}                                     from '../../../../other/helpers'
import {
  FooterButtons,
  StudiesFields
}                                     from '.'
import FormField                      from '../../../../components/UIKit/Forms/FormField'
import ParentField                    from './fields/ParentField'



const StudentForm: FC = () => {
  const {
    data: { schools } = { schools: [] },
  } = useStudentFormQuery()

  const {
    studentOriginal,
    studentModified,
    studentLoading,
    studentChange,
    studentIsEdit,
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
          isEdit={ studentIsEdit }
          setValues={ studentChange }
          values={ { lastName: studentModified.lastName, firstName: studentModified.firstName, patronymic: studentModified.patronymic } }
        />
        { studentModified.birthDate && <p style={ { fontSize: 18 } }>{ humanizeDate( studentModified.birthDate, 'floor' ) }</p> }
      </FormHead>
      <FormBody>
        <FormField
          caption='Дата рождения'
          isEdit={ studentIsEdit }
          value={ studentModified.birthDate as string }
          valueType='date'
          onChange={ value => void studentChange( { birthDate: value } ) }
        />
        <FormField
          caption='Школа'
          getId={ val => val.id }
          getText={ val => val.name }
          isEdit={ studentIsEdit }
          value={ studentModified.school }
          values={ schools }
          valueType='select'
          onChange={ school => studentChange( { school } ) }
        />
        <FormField
          caption={ 'Заметки' }
          isEdit={ studentIsEdit }
          value={ studentModified.description }
          valueType='textarea'
          onChange={ description => studentChange( { description } ) }
        />
        <ParentField/>
        <StudiesFields/>
      </FormBody>
      <FormFooter>
        <FooterButtons/>
      </FormFooter>
    </Form>
  )
}

export default StudentForm