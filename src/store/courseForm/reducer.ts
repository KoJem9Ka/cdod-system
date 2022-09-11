import {
  createSlice,
  PayloadAction
}                              from '@reduxjs/toolkit'
import { GCourseByIdQuery }    from '../../other/generated'
import { ApolloError }         from '@apollo/client'
import { thunkLoadCourseById } from './thunks'
import { actionLogout }        from '../globalActions'
import {
  isNil,
  merge
}                              from 'lodash'



type T = GCourseByIdQuery['course']

const initialState = {
  courseOriginal: null as T | null,
  courseModified: null as T | null,
  error:          null as ApolloError['message'] | null | undefined,
  courseLoading:  false as boolean,
  isEdit:         false as boolean,
}

export const courseFormSlice = createSlice( {
  name:          'courseForm',
  initialState,
  reducers:      {
    actionCourseToggleEdit: ( state, action: PayloadAction<boolean | undefined> ) => {
      state.isEdit = isNil( action.payload ) ? !state.isEdit : action.payload
    },
    actionCourseChange:     ( state, action: PayloadAction<Partial<Omit<T, 'id'>>> ) => {
      merge( state.courseModified, action.payload )
    },
    actionCourseClose:      state => {
      state.courseModified = null
      state.courseOriginal = null
      state.isEdit         = false
    },
  },
  extraReducers: builder => builder
      .addCase( actionLogout, () => initialState )
      .addCase( thunkLoadCourseById.pending, state => {
        state.courseLoading  = true
        state.error          = null
        state.isEdit         = false
        state.courseModified = null
        state.courseOriginal = null
      } )
      .addCase( thunkLoadCourseById.rejected, ( state, action ) => {
        state.courseLoading = false
        state.error         = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkLoadCourseById.fulfilled, ( state, action ) => {
        state.courseLoading  = false
        state.courseOriginal = action.payload
        state.courseModified = action.payload
      } ),
} )

export const { actionCourseToggleEdit, actionCourseChange, actionCourseClose } = courseFormSlice.actions