import {
  createSlice,
  PayloadAction
}                             from '@reduxjs/toolkit'
import { GContractState, GGroupByIdQuery } from '../../other/generated'
import { thunkGroupCommit, thunkLoadGroupByID, thunkLoadOtherStudents } from './thunks'
import {
  cloneDeep,
  isNil,
  merge
} from 'lodash'
import { actionLogout }       from '../globalActions'
import { toast } from 'react-toastify'
import { CREATE, NON_EXISTING_ID } from '../../other/helpers'



type AGroup = GGroupByIdQuery['group']
type AStudents = GGroupByIdQuery['students']
type AOtherStudents = GGroupByIdQuery['otherStudents']


const initialState = {
  groupOriginal : null as null | AGroup,
  groupModified : null as null | AGroup,

  students   : [] as AStudents,
  removedIds : [] as number[],
  addedIds   : [] as number[],

  otherStudents : [] as AOtherStudents,
  
  isEdit : false as boolean,

  groupLoading : false as boolean,
  error        : null as null | string,
}

//TODO: fix ts-ignore...

export const groupFormSlice = createSlice( {
  name     : 'groupForm',
  initialState,
  reducers : {
    actionGroupToggleEdit : ( state, action: PayloadAction<boolean | undefined> ) => {
      state.isEdit = isNil( action.payload ) ? !state.isEdit : action.payload
      state.removedIds = []
      state.addedIds   = []
      state.groupModified = cloneDeep(state.groupOriginal)
      if (state.groupOriginal?.id === NON_EXISTING_ID) {
        state.groupOriginal = null
        state.groupModified = null
      }
      
    },
    actionGroupChange : ( state, action: PayloadAction<Partial<Omit<AGroup, 'id'>>> ) => {
      merge( state.groupModified, action.payload )
    },
    actionGroupRemoveStudent : ( state, action: PayloadAction<number> ) => {
      state.removedIds.includes( action.payload )
        ? state.removedIds = state.removedIds.filter( id => id !== action.payload )
        : state.removedIds = [ ...state.removedIds, action.payload ]
    },
    actionGroupAddStudent : ( state, action: PayloadAction<number> ) => {
      state.addedIds.includes( action.payload )
        ? state.addedIds = state.addedIds.filter( id => id !== action.payload )
        : state.addedIds = [ ...state.addedIds, action.payload ]
    },
    actionGroupCreate : state => {
      state.groupOriginal = state.groupModified = CREATE.group()
      state.isEdit = true
      state.removedIds = []
      state.addedIds   = []
      state.students = []
      state.otherStudents = []
    },
  },
  extraReducers : builder => builder
      .addCase( actionLogout, () => initialState )
      .addCase( thunkLoadGroupByID.pending, state => {
        state.groupLoading = true
        state.error        = null

        state.groupModified = null
        state.groupOriginal = null

        state.students = []
        state.otherStudents = []

        state.removedIds = []
        state.addedIds   = []

        state.isEdit = false
      } )
      .addCase( thunkLoadGroupByID.rejected, ( state, action ) => {
        state.groupLoading = false
        state.error        = `${action.error.message}: ${action.payload}`
      } )
      .addCase( thunkLoadGroupByID.fulfilled, ( state, action ) => {
        state.groupLoading  = false
        state.groupOriginal = action.payload.group
        state.groupModified = action.payload.group
        state.students      = action.payload.students       
        state.otherStudents = action.payload.otherStudents
      })
      .addCase(thunkLoadOtherStudents.pending, state => {
        state.groupLoading = true
        state.error = null
        state.otherStudents = []
        state.addedIds = []
      })
      .addCase(thunkLoadOtherStudents.rejected, (state, action) => {
        state.groupLoading = false
        state.error        = `${action.error.message}: ${action.payload}`
      })
      //TODO: убрать фильтр
      .addCase(thunkLoadOtherStudents.fulfilled, (state, action) => {
        state.groupLoading = false
        state.otherStudents = action.payload.otherStudents.filter(st => st.info.some(study => study.contractState === GContractState.Studying || study.contractState === GContractState.Consideration))
      })
      .addCase(thunkGroupCommit.pending, state => {
        state.groupLoading = true,
        state.isEdit = false
      })
      .addCase(thunkGroupCommit.rejected, (state, action) => {
        state.groupLoading = false,
        state.error = `${action.error.message}: ${action.payload}`
        toast.error(state.error)
      })
      .addCase(thunkGroupCommit.fulfilled, state => {
        state.groupLoading = false
      }),
} )

export const {
  actionGroupRemoveStudent,
  actionGroupChange,
  actionGroupAddStudent,
  actionGroupToggleEdit,
  actionGroupCreate,
} = groupFormSlice.actions