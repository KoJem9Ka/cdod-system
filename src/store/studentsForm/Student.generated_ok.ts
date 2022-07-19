import * as Types from '../../other/generated'

import * as Apollo from '@apollo/client'
import { gql }     from '@apollo/client'



const defaultOptions = {} as const
export type GStudentQueryVariables = Types.Exact<{
  studentID: Types.Scalars['ID']
}>

export type GStudentQuery = {
  student: {
    id: string
    lastName: string
    firstName: string
    patronymic: string
    birthDate: string
    school: {
      name: string
      district: string
    }
    parent: {
      lastName: string
      firstName: string
      patronymic: string
      phoneNumber: string
      secondPhoneNumber: string
      email: string
      secondEmail: string
      applyingDate: string
    }
    info: {
      admissionDate: string
      contractState: string
      isCoursePaid: boolean
      isEquipmentPaid: boolean | null
      isGetRobot: boolean | null
      courseId: string
      course: { name: string }
      group: { name: string } | null
    }[]
  }
}

export const StudentDocument = gql`
  query Student($studentID: ID!) {
    student: Student(id: $studentID) {
      id
      lastName
      firstName
      patronymic
      birthDate
      school: School {
        name
        district
      }
      parent: Parent {
        lastName
        firstName
        patronymic
        phoneNumber
        secondPhoneNumber
        email
        secondEmail
        applyingDate
      }
      info: Infos {
        admissionDate
        contractState
        courseId: course_id
        course: Course {
          name
        }
        group: Group {
          name
        }
        isCoursePaid
        isEquipmentPaid
        isGetRobot
      }
    }
  }
`

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      studentID: // value for 'studentID'
 *   },
 * });
 */
export function useStudentQuery( baseOptions: Apollo.QueryHookOptions<GStudentQuery, GStudentQueryVariables> ) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GStudentQuery, GStudentQueryVariables>( StudentDocument, options )
}

export function useStudentLazyQuery( baseOptions?: Apollo.LazyQueryHookOptions<GStudentQuery, GStudentQueryVariables> ) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GStudentQuery, GStudentQueryVariables>( StudentDocument, options )
}

export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>
export type StudentQueryResult = Apollo.QueryResult<GStudentQuery, GStudentQueryVariables>
