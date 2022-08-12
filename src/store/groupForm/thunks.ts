import { createAsyncThunk }  from '@reduxjs/toolkit'
import { TAppThunkConfig }   from '../store'
import { ApolloQueryResult } from '@apollo/client'
import {
  GGroupByIdQuery,
  GGroupByIdQueryVariables,
  GroupByIdDocument
}                            from '../../other/generated'
import { client }            from '../../queries/client'



type AGroup = GGroupByIdQuery['group']

export const thunkLoadGroupByID = createAsyncThunk<GGroupByIdQuery, AGroup['id'], TAppThunkConfig>( 'groupForm/load',
  async ( groupID, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GGroupByIdQuery>
    try {
      queryResult = await client.query<GGroupByIdQuery, GGroupByIdQueryVariables>( { query: GroupByIdDocument, variables: { groupID } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке группы с id = ${ groupID }, error: ${ e }` )
    }
    return queryResult.data
  }
)