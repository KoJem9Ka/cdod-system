import React, { FC }                  from 'react'
import { useStudentForm }             from '../../../../store/studentsForm/hooks'
import { ReactComponent as UserLogo } from '../../../../assets/img/userLogo.svg'
import {
  EditableFIO,
  Form,
  FormBody,
  FormFooter,
  FormHead
}                                     from '../../../../components/Forms'
import {
  BirthDayField,
  DescriptionField,
  FooterButtons,
  SchoolField
}                                     from './index'
import ParentsField                   from './fields/ParentsField'
import { useStudentFormQuery }        from '../../../../other/generated'
import StudiesField                   from './fields/StudiesField'
import { humanizeDate }               from '../../../../other/helpers'



type Props = {}
const StudentForm: FC<Props> = props => {
  const {
    loading: queryLoading,
    data:    { schools, courses } = { schools: [], courses: [] },
    error,
  } = useStudentFormQuery()

  const {
    studentOriginal,
    studentModified,
    studentLoading,
    changeStudent,
    isEdit,
    toggleEdit,
  } = useStudentForm()
  if ( studentLoading ) return (<Form><h2>Loading</h2></Form>)
  if ( studentModified === null || studentOriginal === null ) return <></>

  return (
    <Form>
      <FormHead>
        <UserLogo/>
        <EditableFIO
          isEdit={ isEdit }
          setValues={ changeStudent }
          values={ { patronymic: studentModified.patronymic, lastName: studentModified.lastName, firstName: studentModified.firstName } }
        />
        <p>{ humanizeDate( studentModified.birthDate ) }</p>
      </FormHead>
      <FormBody>
        <BirthDayField/>
        <SchoolField/>
        <StudiesField/>
        <DescriptionField/>
        <ParentsField/>
      </FormBody>
      <FormFooter>
        <FooterButtons/>
      </FormFooter>
    </Form>
  )
}

export default StudentForm

