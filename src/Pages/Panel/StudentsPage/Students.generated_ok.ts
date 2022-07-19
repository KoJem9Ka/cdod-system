import * as Types from '../../../other/generated'

import * as Apollo from '@apollo/client'
import { gql }     from '@apollo/client'



const defaultOptions = {} as const
export type GStudentsQueryVariables = Types.Exact<Record<string, never>>
export type GStudentsQuery = {
  students: {
    id: string
    lastName: string
    patronymic: string
    birthDate: string
    firstName: string
    description: string | null
    parent: {
      phoneNumber: string
      secondPhoneNumber: string
      applyingDate: string
    }
    info: {
      isCoursePaid: boolean
      isEquipmentPaid: boolean | null
      admissionDate: string
      contractState: string
      course: { name: string }
      group: { name: string } | null
    }[]
  }[]
}


export const StudentsDocument = gql`
  query Students {
    students: allStudents {
      id
      lastName
      patronymic
      birthDate
      firstName
      description
      parent: Parent {
        phoneNumber
        secondPhoneNumber
        applyingDate
      }
      info: Infos {
        course: Course {
          name
        }
        group: Group {
          name
        }
        isCoursePaid
        isEquipmentPaid
        admissionDate
        contractState
      }
    }
  }
`

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentsQuery( baseOptions?: Apollo.QueryHookOptions<GStudentsQuery, GStudentsQueryVariables> ) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GStudentsQuery, GStudentsQueryVariables>( StudentsDocument, options )
}

export function useStudentsLazyQuery( baseOptions?: Apollo.LazyQueryHookOptions<GStudentsQuery, GStudentsQueryVariables> ) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GStudentsQuery, GStudentsQueryVariables>( StudentsDocument, options )
}

export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>
export type StudentsQueryResult = Apollo.QueryResult<GStudentsQuery, GStudentsQueryVariables>