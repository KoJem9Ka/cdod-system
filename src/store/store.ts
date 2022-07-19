import { configureStore }        from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector
}                                from 'react-redux'
import {
  api,
  TApi
}                                from '../API/api'
import { insteadOfContextSlice } from './InsteadOfContext/reducer'
import logger                    from 'redux-logger'
import { studentFormSlice }      from './studentsForm/reducer'
import { client }                from '../index'



export const store = configureStore( {
  reducer:    {
    insteadOfContext: insteadOfContextSlice.reducer,
    studentForm:      studentFormSlice.reducer,
  },
  devTools:   true,
  middleware: getDefaultMiddleware => getDefaultMiddleware( {
    thunk: { extraArgument: { api } },
  } ).concat( logger ),
} )

export type TAppState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector
export type TAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TAppDispatch>()
export type TAppThunkConfig = {
  extra: {
    api: TApi
  }
}
