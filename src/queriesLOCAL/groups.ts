import {
  ApolloError,
  gql,
  useQuery
}                 from '@apollo/client'
import { TGroup } from '../types'



export const useQueryGroups = (): returning => {
  const { loading, error, data } = useQuery<data>( GQL )
  return {
    loading,
    error,
    groups: data?.allGroups || [],
  }
}

const GQL = gql`
  query getAllGroups{
    allGroups{
      id
      course
      groupName
      teacher
      dateOfCreation
      studentsCount
    }
  }
`

type data = {
  allGroups: TGroup[]
}

type returning = {
  loading: boolean
  error?: ApolloError
  groups: TGroup[]
}