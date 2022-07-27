/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-unnecessary-type-assertion */
import { createAsyncThunk }  from '@reduxjs/toolkit'
import { TAppThunkConfig }   from '../store'
import { client }            from '../../index'
import { ApolloQueryResult } from '@apollo/client'
import {
  GStudentQuery,
  GStudentQueryVariables,
  StudentDocument
}                            from '../../other/generated'



type TStudentObjFromQuery = GStudentQuery['student']
type TVariableStudentID = GStudentQueryVariables['studentID']

export const thunkLoadStudent = createAsyncThunk<TStudentObjFromQuery, TVariableStudentID, TAppThunkConfig>( 'studentForm/load',
  async ( id, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GStudentQuery>
    try {
      queryResult = await client.query<GStudentQuery, GStudentQueryVariables>( { query: StudentDocument, variables: { studentID: id } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке студента с id = ${ id }, error: ${ e }` )
    }
    return queryResult.data.student
  }
)
