import React, { FC }      from 'react'
import { useStudentForm } from '../../../../store/studentsForm/hooks'
import styled              from 'styled-components'
import { useStudentQuery } from '../../../../API/Student.generated'



type Props = {}
const StudentForm: FC<Props> = props => {

  const { id } = useStudentForm()
  const { data, loading, error } = useStudentQuery( { variables: { studentID: id ?? '0' } } )


  return (
    <Form>
      <FormHead>

      </FormHead>
      <FormBody>

      </FormBody>

    </Form>
  )
}

export default StudentForm

const Form = styled.div`
  max-width  : 385px;
  background : var(--COLOR_blue);
  height     : fit-content;
  max-height : 100%;
`

const FormHead = styled.div`
  & > * + * {
    margin-top : 1rem;
  }
`

const FormBody = styled.div`
  height     : fit-content;
  max-height : 100%;
  overflow-y : auto;
`