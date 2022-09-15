import { configureStore }        from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector
}                                from 'react-redux'
// import logger                    from 'redux-logger'
import { insteadOfContextSlice } from './InsteadOfContext/reducer'
import { studentFormSlice }      from './studentForm/reducer'
import { courseFormSlice }       from './courseForm/reducer'
import { groupFormSlice }        from './groupForm/reducer'
import { IS_DEV }                from '../other/helpers'



export const store = configureStore( {
  reducer : {
    insteadOfContext : insteadOfContextSlice.reducer,
    studentForm      : studentFormSlice.reducer,
    courseForm       : courseFormSlice.reducer,
    groupForm        : groupFormSlice.reducer,
  },
  devTools   : IS_DEV,
  middleware : getDefaultMiddleware => getDefaultMiddleware( {
    thunk : { extraArgument: {} },
  } )/*.concat( logger )*/,
} )

export type TAppState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector
export type TAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<TAppDispatch>()
export type TAppThunkConfig = {
  extra: {}
}
