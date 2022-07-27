import {
  createSlice,
  PayloadAction
}                           from '@reduxjs/toolkit'
import { thunkLoadStudent } from './thunks'
import { ApolloError }      from '@apollo/client'
import { GStudentQuery }    from '../../other/generated'



type T = GStudentQuery['student']

const initialState = {
  studentLoading:  false as boolean,
  error:           null as ApolloError['message'] | null | undefined,
  studentOriginal: null as T | null,
  studentModified: null as T | null,
  isEdit:          false as boolean,
}

export const studentFormSlice = createSlice( {
  name:          'studentForm',
  initialState,
  reducers:      {
    actionToggleEdit:    ( state, action: PayloadAction<boolean | undefined> ) => {
      state.isEdit = action.payload !== undefined ? action.payload : !state.isEdit
    },
    actionChangeStudent: ( state, action: PayloadAction<Partial<Omit<T, 'id'>>> ) => {
      // @ts-ignore
      state.studentModified = { ...state.studentModified, ...action.payload }
    },
  },
  extraReducers: builder => builder
      .addCase( thunkLoadStudent.pending, ( state, action ) => {
        state.studentLoading = true
        state.error = null
        state.studentOriginal = null
        state.studentModified = null
      } )
      .addCase( thunkLoadStudent.rejected, ( state, action ) => {
        state.studentLoading = false
        state.error = `${ action.error.message }: ${ action.payload }`
      } )
      .addCase( thunkLoadStudent.fulfilled, ( state, action ) => {
        state.studentLoading = false
        state.studentOriginal = action.payload
        state.studentModified = action.payload
      } ),
} )

export const { actionToggleEdit, actionChangeStudent } = studentFormSlice.actions