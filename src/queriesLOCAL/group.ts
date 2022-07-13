import {
  gql,
  useQuery
} from '@apollo/client'
import {
  TGroup,
  TStudent
} from '../types'



export const useQueryGroupById = ( id: number ) => useQuery<data, variables>( GQL, { variables: { groupId: id } } )

const GQL = gql`
  query getOneGroup($groupId: ID!){
    Group(id: $groupId){
      id
      course
      groupName
      dateOfCreation
      studentsCount
      teacher
      Students{
        id
        last_name
        first_name
        patronymic
        birth_date
      }
    }
  }
`

type data = {
  Group: TGroup & {
    Students: TStudent[]
  }
}

type variables = {
  groupId: number
}

// type returning = {
//   loading: boolean
//   error?: ApolloError
//   data: data
// }