import { createSlice } from '@reduxjs/toolkit'
import { TStudent } from './types'
import { TError, TStatus } from '../types'
import { thunkLoadStudentsTable } from './thunks'


const initialState = {
  list: [] as TStudent[],
  status: 'idle' as TStatus,
  error: null as TError,
}

export const studentsSlice = createSlice( {
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase( thunkLoadStudentsTable.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.list = [] //todo : add action payload to thunk
    } )
    .addMatcher( action => action.type.endsWith( '/pending' ), (state, action) => {
      state.status = 'pending'
      state.error = null
    } )
    .addMatcher( action => action.type.endsWith( '/fulfilled' ), (state, action) => {
      state.status = 'fulfilled'
    } )
    .addMatcher( action => action.type.endsWith( '/rejected' ), (state, action) => {
      state.status = 'rejected'
      // if (action.error.message !== 'Aborted')
      state.error = action.payload || action.error.message
    } ),
} )
