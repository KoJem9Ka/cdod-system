import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAppThunkConfig } from '../store'
import {
  CourseByIdDocument,
  GCourseByIdQuery,
  GCourseByIdQueryVariables,
  GCourseUpdateInput
} from '../../other/generated'
import { ApolloQueryResult } from '@apollo/client'
import { client } from '../../index'


type TCourseObjFromQuery = GCourseByIdQuery['course']
type TVariableCourseID = GCourseByIdQueryVariables['courseId']

export const thunkLoadCourseById = createAsyncThunk<TCourseObjFromQuery, TVariableCourseID, TAppThunkConfig>('courseForm/load', async (id, { rejectWithValue }) => {
  let queryResult: ApolloQueryResult<GCourseByIdQuery>
  try{
    queryResult = await client.query<GCourseByIdQuery, GCourseByIdQueryVariables>({ query: CourseByIdDocument, variables: { courseId: id } })
  }
  catch (e) {
    return rejectWithValue(`Произошла ошибка при загрузке курса с id = ${ id }, error: ${ e }`)
  }
  return queryResult.data.course
})

// export const thunkUpdateCourseForm = createAsyncThunk<TCourseObjFromQuery, GCourseUpdateInput, TAppThunkConfig>('courseForm/close', async (course, { rejectWithValue }) => {
//   let mutationResult: ApolloQueryResult<GCourseByIdQuery>
//   try {
//     mutationResult = await client.mutate()
//   } catch (e) {
//
//   }
//   return mutationResult.data.course
// })