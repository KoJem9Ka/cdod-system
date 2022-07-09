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
  query getStudents {
    students {
      nodes {
        id
        lastName
        firstName
        patronymic
        birthDate
        groups {
          name
          course {
            name
            studentToCourses {
              isCoursePaid
              isEquipmentPaid
              contractState {
                name
              }
            }
          }
        }
        parent {
          secondPhoneNumber
          user {
            phoneNumber
          }
          signDate
        }
        descriotion
      }
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