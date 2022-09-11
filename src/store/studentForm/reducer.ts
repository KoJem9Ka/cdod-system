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
import {
  CREATE,
  recursiveConvertObjValues
}                            from '../../other/helpers'
import { toast }             from 'react-toastify'



type T = GStudentByIdQuery['student']

export type StudyModify = {
  index: number
  data: DeepPartial<T['info'][number]>
}

const initialState = {
  studentLoading  : false as boolean,
  error           : null as ApolloError['message'] | null | undefined,
  studentOriginal : null as T | null,
  studentModified : null as T | null,
  studentIsEdit   : false as boolean,
}

export const studentFormSlice = createSlice( {
  name     : 'studentForm',
  initialState,
  reducers : {
    actionStudentStudyCreate( state ) {
      state.studentModified?.info.push( CREATE.study() )
    },
    actionStudentStudyChange( state, action: PayloadAction<StudyModify> ) {
      const study = state.studentModified?.info[action.payload.index]
      console.log( study, action.payload )
      if ( isNil( study ) ) toast.error( 'Ошибка изменения обучения студента' )
      else merge( study, action.payload.data )
    },
    actionStudentStudyDelete( state, action: PayloadAction<number> ) {
      state.studentModified?.info.splice( action.payload, 1 )
    },
    actionStudentCreate( state ) {
      state.studentModified = state.studentOriginal = CREATE.student()
      state.studentIsEdit   = true
    },
    actionStudentClose( state ) {
      state.studentModified = state.studentOriginal = null
      state.studentIsEdit   = false
    },
    actionStudentToggleEdit( state, action: PayloadAction<boolean | undefined> ) {
      state.studentModified = state.studentOriginal
      state.studentIsEdit   = isNil( action.payload ) ? !state.studentIsEdit : action.payload
    },
    actionStudentChange( state, action: PayloadAction<DeepPartial<Omit<T, 'id'>>> ) {
      merge( state.studentModified, recursiveConvertObjValues( action.payload, '', null ) )
    },
  },
  extraReducers : builder => builder
      .addCase( thunkStudentLoad.pending, state => {
        state.studentLoading  = true
        state.error           = null
        state.studentModified = state.studentOriginal = null
        state.studentIsEdit   = false
      } )
      .addCase( thunkStudentLoad.rejected, ( state, action ) => {
        state.studentLoading = false
        state.error          = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkStudentLoad.fulfilled, ( state, action ) => {
      // IS_DEV && toast( action.payload.id )
        state.studentLoading  = false
        state.studentModified = state.studentOriginal = action.payload
      } )
      .addCase( thunkStudentCommit.pending, state => {
        state.studentLoading = true
        state.studentIsEdit  = false
      } )
      .addCase( thunkStudentCommit.rejected, ( state, action ) => {
        state.studentLoading = false
        state.error          = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkStudentCommit.fulfilled, state => {
        state.studentLoading  = false
        state.studentOriginal = state.studentModified
      } ),
} )

export const {
  actionStudentToggleEdit,
  actionStudentChange,
  actionStudentCreate,
  actionStudentClose,
  actionStudentStudyCreate,
  actionStudentStudyChange,
  actionStudentStudyDelete,
} = studentFormSlice.actions
