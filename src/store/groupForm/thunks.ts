import { createAsyncThunk }  from '@reduxjs/toolkit'
import { GGroupsQuery }      from '../../Pages/Panel/GroupsPage/Groups.generated'
import { TAppThunkConfig }   from '../store'
import { client }            from '../../index'
import { ApolloQueryResult } from '@apollo/client'
import {
  GStudentQuery,
  GStudentQueryVariables,
  StudentDocument
} from '../studentsForm/Student.generated_ok'
import {
  GGroupByIdQuery,
  GGroupByIdQueryVariables,
  GroupByIdDocument
} from './GroupByID.generated'



type AGroup = GGroupByIdQuery['group']

export const thunkLoadGroupByID = createAsyncThunk<AGroup, AGroup['id'], TAppThunkConfig>( 'groupForm/load',
  async ( groupID, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GGroupByIdQuery>
    try {
      queryResult = await client.query<GGroupByIdQuery, GGroupByIdQueryVariables>( { query: GroupByIdDocument, variables: { groupID } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке группы с id = ${ groupID }, error: ${ e }` )
    }
    return queryResult.data.group
  }
)
export {}