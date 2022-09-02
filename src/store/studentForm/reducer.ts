import {
  createSlice,
  PayloadAction
}                            from '@reduxjs/toolkit'
import {
  thunkStudentCommit,
  thunkStudentLoad
}                            from './thunks'
import { ApolloError }       from '@apollo/client'
import { GStudentByIdQuery } from '../../other/generated'
import {
  isNil,
  merge
}                            from 'lodash'
import { DeepPartial }       from '../../other/typing'
import { newStudent }        from '../../other/helpers'



type T = GStudentByIdQuery['student']

const initialState = {
  studentLoading:  false as boolean,
  error:           null as ApolloError['message'] | null | undefined,
  studentOriginal: null as T | null,
  studentModified: null as T | null,
  studentIsEdit:   false as boolean,
}

export const studentFormSlice = createSlice( {
  name:          'studentForm',
  initialState,
  reducers:      {
    actionStudentCreate( state ) {
      state.studentModified = state.studentOriginal = newStudent()
      state.studentIsEdit = true
    },
    actionStudentClose( state ) {
      state.studentModified = state.studentOriginal = null
      state.studentIsEdit = false
    },
    actionStudentToggleEdit( state, action: PayloadAction<boolean | undefined> ) {
      state.studentModified = state.studentOriginal
      state.studentIsEdit = isNil( action.payload ) ? !state.studentIsEdit : action.payload
    },
    actionStudentChange( state, action: PayloadAction<DeepPartial<Omit<T, 'id'>>> ) {
      merge( state.studentModified, action.payload )
    },
  },
  extraReducers: builder => builder
      .addCase( thunkStudentLoad.pending, state => {
        state.studentLoading = true
        state.error = null
        state.studentModified = state.studentOriginal = null
        state.studentIsEdit = false
      } )
      .addCase( thunkStudentLoad.rejected, ( state, action ) => {
        state.studentLoading = false
        state.error = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkStudentLoad.fulfilled, ( state, action ) => {
        state.studentLoading = false
        state.studentModified = state.studentOriginal = action.payload
      } )
      .addCase( thunkStudentCommit.pending, state => {
        state.studentLoading = true
        state.studentIsEdit = false
      } )
      .addCase( thunkStudentCommit.rejected, ( state, action ) => {
        state.studentLoading = false
        state.error = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkStudentCommit.fulfilled, state => {
        state.studentLoading = false
        state.studentOriginal = state.studentModified
      } ),
} )

export const {
  actionStudentToggleEdit,
  actionStudentChange,
  actionStudentCreate,
  actionStudentClose,
} = studentFormSlice.actions