import { createSlice }     from '@reduxjs/toolkit'
import { GGroupByIdQuery } from '../../other/generated'



type AGroup = GGroupByIdQuery['group']

const initialState = {
  groupOriginal: null as null | AGroup,
  groupModified: null as null | AGroup,
  loading:       false as boolean,
  error:         null as null | string,
}

const groupFormSLice = createSlice( {
  name:     ' groupForm',
  initialState,
  reducers: {},
} )