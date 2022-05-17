import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  panelOpened: true as boolean,
}

export const insteadOfContextSlice = createSlice( {
  name: 'InsteadOfContext',
  initialState,
  reducers: {
    actionTogglePanel: state => void (state.panelOpened = !state.panelOpened),
  },
} )

export const { actionTogglePanel } = insteadOfContextSlice.actions
