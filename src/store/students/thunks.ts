import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAppAsyncThinkConfig } from '../store'

export const thunkLoadStudentsTable = createAsyncThunk<void/*TStudent[]*/, void, TAppAsyncThinkConfig>( 'students/load',
  async (_ = undefined, { extra: api }) => {
    const students = await api.studentsTable.get()
    console.log( students )
  }
)
