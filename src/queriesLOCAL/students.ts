import {
  ApolloError,
  gql,
  useQuery
}                   from '@apollo/client'
import { TStudent } from '../types'



export const useQueryStudents = (): STUDENTS.returning => {
  const { loading, error, data } = useQuery<STUDENTS.data>( GQL )
  return {
    loading,
    error,
    students: data?.allStudents || [],
  }
}

const GQL = gql`
  query getStudentsPaginated {
    #    _allStudentsMeta {
    #      count
    #    }
    allStudents {
      id
      last_name
      first_name
      patronymic
      birth_date
      course
      group
      phone_number
      notes
      paid
      materials_paid
      request_date
      contract_status
    }
  }
`


declare module STUDENTS {
  type data = {
    // _allStudentsMeta: {
    //   count: number
    // }
    allStudents: TStudent[]
  }

  type returning = {
    loading: boolean
    error?: ApolloError
    students: TStudent[]
  }
}