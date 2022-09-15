import { FC }                         from 'react'
import {
  FooterButtons,
  StudiesFields
}                                     from '.'
import { ReactComponent as UserLogo } from '../../../../assets/img/userLogo.svg'
import {
  EditableFIO,
  Form,
  FormBody,
  FormFooter,
  FormHead
}                                     from '../../../../components/UIKit/Forms'
import FormField                      from '../../../../components/UIKit/Forms/FormField'
import {
  GStudentByIdQuery,
  useStudentFormQuery
}                                     from '../../../../other/generated'
import { humanizeDate }               from '../../../../other/helpers'
import {
  StForm,
  useStudentForm
}                                     from '../../../../store/studentForm/hooks'
import ParentField                    from './fields/ParentField'



const handlerBirthDate     = ( birthDate: string ) => void StForm.change( { birthDate } )
const handlerDescription   = ( description: string ) => StForm.change( { description } )
const handlerGetSchoolId   = ( val: NonNullable<QSchool> ) => val.id
const handlerGetSchoolName = ( val: NonNullable<QSchool> ) => val.name

type QSchool = GStudentByIdQuery['student']['school']
const handlerSchool = ( school: QSchool ) => StForm.change( { school } )

const StudentForm: FC = () => {
  const { data: { schools } = { schools: [] } } = useStudentFormQuery()

  const { studentOriginal, studentModified, studentLoading, studentIsEdit } = useStudentForm( s => [
    s.studentOriginal,
    s.studentModified,
    s.studentIsEdit,
    s.studentLoading
  ] )

  if ( studentLoading )
    return (
      <Form>
        <h2>Loading</h2>
      </Form>
    )
  if ( studentModified === null || studentOriginal === null ) return <></>

  return (
    <Form>
      <FormHead>
        <UserLogo/>
        <div>
          <EditableFIO
            isEdit={studentIsEdit}
            setValues={StForm.change}
            values={{
              lastName   : studentModified.lastName,
              firstName  : studentModified.firstName,
              patronymic : studentModified.patronymic,
            }}
          />
          {studentModified.birthDate &&
            <p style={{ fontSize: 18 }}>{humanizeDate(studentModified.birthDate, 'floor')}</p>}
        </div>
      </FormHead>
      <FormBody id='StFormBody'>
        <FormField
          caption='Дата рождения'
          isEdit={studentIsEdit}
          text={studentModified.birthDate}
          variant='date'
          onEdit={handlerBirthDate}
        />
        <FormField
          caption='Школа'
          element={studentModified.school}
          elements={schools}
          getId={handlerGetSchoolId}
          getText={handlerGetSchoolName}
          isEdit={studentIsEdit}
          variant='search'
          onSelect={handlerSchool}
        />
        <FormField
          caption={'Заметки'}
          isEdit={studentIsEdit}
          text={studentModified.description}
          variant='textarea'
          onEdit={handlerDescription}
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

StudentForm.whyDidYouRender = true

export default StudentForm
