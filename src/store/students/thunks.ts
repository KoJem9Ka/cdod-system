import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAppAsyncThinkConfig } from '../store'
import { TStudent } from './types'

export const thunkLoadStudentsTable = createAsyncThunk<TStudent[], void, TAppAsyncThinkConfig>( 'students/load',
  async (_ = undefined, { extra: api }) => {
    const { data } = await api.studentsTable.get()
    return data
  }
)
