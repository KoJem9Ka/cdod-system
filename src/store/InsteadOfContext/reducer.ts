import {
  createSlice,
  PayloadAction
}                       from '@reduxjs/toolkit'
import { actionLogout } from '../globalActions'



const initialState = {
  panelOpened: true as boolean,
  isPreloader: false as boolean,
}

export const insteadOfContextSlice = createSlice( {
  name:          'InsteadOfContext',
  initialState,
  reducers:      {
    actionTogglePanel:  state => {
      state.panelOpened = !state.panelOpened
    },
    actionSetPreloader: ( state, action: PayloadAction<boolean> ) => {
      state.isPreloader = action.payload
    },
  },
  extraReducers: builder => builder
      .addCase( actionLogout, () => initialState ),
} )

export const { actionTogglePanel, actionSetPreloader } = insteadOfContextSlice.actions
