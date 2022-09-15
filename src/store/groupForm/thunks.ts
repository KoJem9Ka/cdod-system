import { createAsyncThunk }  from '@reduxjs/toolkit'
import { TAppThunkConfig }   from '../store'
import { ApolloQueryResult } from '@apollo/client'
import {
  GGroupByIdQuery,
  GGroupByIdQueryVariables,
  GroupByIdDocument
}                            from '../../other/generated'
import { client }            from '../../queries/client'

type LoadGroupByIDParams = {
  groupID: number
  courseID: number
}


export const thunkLoadGroupByID = createAsyncThunk<GGroupByIdQuery, LoadGroupByIDParams, TAppThunkConfig>( 'groupForm/load',
  async ({ groupID, courseID }, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GGroupByIdQuery>
    try {
      queryResult = await client.query<GGroupByIdQuery, GGroupByIdQueryVariables>( { query: GroupByIdDocument, variables: { groupID, courseID } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке группы с id = ${ groupID }, error: ${ e }` )
    }
    return queryResult.data
  }
)