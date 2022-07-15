import {
  createSlice,
  PayloadAction
}                   from '@reduxjs/toolkit'
import { GStudent } from '../../other/generated'



const initialState = {
  id: undefined as undefined | GStudent['id'],
}

export const studentFormSlice = createSlice( {
  name:     'studentForm',
  initialState,
  reducers: {
    actionSelectStudent: ( state, action: PayloadAction<GStudent['id']> ) => {
      state.id = action.payload
    },
  },
} )

export const { actionSelectStudent } = studentFormSlice.actions