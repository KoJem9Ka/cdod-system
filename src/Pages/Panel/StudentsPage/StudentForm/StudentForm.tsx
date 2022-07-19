import React, { FC }                  from 'react'
import { useStudentForm }             from '../../../../store/studentsForm/hooks'
import styled                         from 'styled-components'
import { ReactComponent as UserLogo } from '../../../../assets/img/userLogo.svg'
import EditableLine                   from './EditableLine'
import { compact }                    from 'lodash'
import moment                         from 'moment'



type Props = {}
const StudentForm: FC<Props> = props => {
  const {
    studentOriginal,
    studentModified,
    studentLoading,
    changeStudent,
    isEdit,
    toggleEdit,
  } = useStudentForm()
  if ( studentLoading ) return <Form><h2>Loading</h2></Form>
  if ( studentModified === null ) return <></>

  const fio = compact( [ studentModified.lastName, studentModified.firstName, studentModified.patronymic ] ).join( ' ' )
  const setFio = ( line: string ) => {
    const fio1 = line.split( ' ' )
    changeStudent( {
      lastName:   fio1[0] || '',
      firstName:  fio1[1] || '',
      patronymic: fio1[2] || '',
    } )
  }

  return (
    <Form>
      <FormHead>

        <UserLogo/>
        <EditableLine isEdit={ isEdit } setValue={ setFio } value={ fio }/>
        <p>{ moment( studentModified.birthDate ).fromNow( true ) }</p>

      </FormHead>
      <FormBody>

        123322

      </FormBody>
      <FormFooter>

        { isEdit
          ? <>
            <button onClick={ () => toggleEdit() }>Сохранить</button>
            <button onClick={ () => toggleEdit() }>Отмена</button>
          </>
          : <button onClick={ () => toggleEdit() }>Редактировать</button>
        }

      </FormFooter>
    </Form>
  )
}

export default StudentForm

const Form = styled.div`
  background    : white;
  flex          : 0 0 385px;
  height        : fit-content;
  overflow: hidden;
  max-height    : 100%;
  color         : white;
  border-radius : 1.25rem;
`

const FormHead = styled.div`
  background     : var(--COLOR_blue);
  padding        : 20px;
  width          : 100%;
  display        : flex;
  flex-direction : column;
  align-items    : center;

  //p {
  //  text-align : center;
  //  width      : max-content;
  //}
  //
  //p:nth-child(2) {
  //  font-size   : 20px;
  //  font-weight : bold;
  //}
  //
  //p:nth-child(3) {
  //  font-size : 18px;
  //}

  & > * + * {
    margin-top : 20px;
  }
`

const FormBody = styled.div`
  height     : fit-content;
  max-height : 100%;
  overflow-y : auto;
`

const FormFooter = styled.div`
  background : var(--COLOR_blue);
`