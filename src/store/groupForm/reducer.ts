import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GGroupByIdQuery } from '../../other/generated'
import { thunkLoadGroupByID } from './thunks'


type AGroup = GGroupByIdQuery['group']
type AStudents = GGroupByIdQuery['students']


const initialState = {
  groupOriginal: null as null | AGroup,
  groupModified: null as null | AGroup,
	
  students: null as null | AStudents,
  removedIds: [] as number[],
  addedIds: [] as number[],
	
  isEdit: false as boolean,
	
  groupLoading: false as boolean,
  error: null as null | string,
}

//TODO: fix ts-ignore...

export const groupFormSLice = createSlice({
  name: 'groupForm',
  initialState,
  reducers: {
    actionGroupToggleEdit: (state, action: PayloadAction<boolean | undefined>) => {
      state.isEdit = action.payload !== undefined ? action.payload : !state.isEdit
    },
    actionGroupChange: (state, action: PayloadAction<Partial<Omit<AGroup, 'id'>>>) => {
      // @ts-ignore
      state.groupModified = { ...state.groupModified, ...action.payload }
    },
		
    actionGroupRemoveStudent: (state, action: PayloadAction<number>) => {
      state.removedIds.includes(action.payload)
        ? state.removedIds = state.removedIds.filter(id => id !== action.payload)
        : state.removedIds = [ ...state.removedIds, action.payload ]
    },
    actionGroupAddStudent: (state, action: PayloadAction<number>) => {
      state.addedIds.includes(action.payload)
        ? state.addedIds = state.addedIds.filter(id => id !== action.payload)
        : state.addedIds = [ ...state.addedIds, action.payload ]
    },
		
  },
  extraReducers: builder => builder
      .addCase(thunkLoadGroupByID.pending, (state, action) => {
        state.groupLoading = true
        state.error = null
			
        state.groupModified = null
        state.groupOriginal = null
			
        state.students = null
			
        state.removedIds = []
        state.addedIds = []
			
        state.isEdit = false
      })
      .addCase(thunkLoadGroupByID.rejected, (state, action) => {
        state.groupLoading = false
        state.error = `${action.error.message}: ${action.payload}`
      })
      .addCase(thunkLoadGroupByID.fulfilled, (state, action) => {
        state.groupLoading = false
        state.groupOriginal = action.payload.group
        state.groupModified = action.payload.group
        state.students = action.payload.students
      }),
})

export const {
  actionGroupRemoveStudent,
  actionGroupChange,
  actionGroupAddStudent,
  actionGroupToggleEdit,
} = groupFormSLice.actions