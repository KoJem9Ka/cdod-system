import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'



const initialState = {
  panelOpened: true as boolean,
  isPreloader: false as boolean,
}

export const insteadOfContextSlice = createSlice( {
  name:     'InsteadOfContext',
  initialState,
  reducers: {
    actionTogglePanel:  state => void (state.panelOpened = !state.panelOpened),
    actionSetPreloader: ( state, action: PayloadAction<boolean> ) => void (state.isPreloader = action.payload),
  },
} )

export const { actionTogglePanel, actionSetPreloader } = insteadOfContextSlice.actions
