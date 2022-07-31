import {
  TAppState,
  useAppDispatch,
  useAppSelector,
}                           from '../store'
import {
  GStudentQuery,
  GStudentType,
}                           from '../../other/generated'
import { useCallback }      from 'react'
import { thunkLoadStudent } from './thunks'
import {
  actionChangeStudent,
  actionToggleEdit,
}                           from './reducer'



type T = GStudentQuery['student']


const selectStudentForm = ( state1: TAppState ) => state1.studentForm

export const useStudentForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector( selectStudentForm )

  const selectStudent = useCallback( ( id: GStudentType['id'] ) => void dispatch( thunkLoadStudent( id ) ), [] )
  const toggleEdit = useCallback( ( value?: boolean ) => void dispatch( actionToggleEdit( value ) ), [] )
  const changeStudent = useCallback( ( value: Partial<Omit<T, 'id'>> ) => void dispatch( actionChangeStudent( value ) ), [] )

  return {
    ...state,
    selectStudent,
    toggleEdit,
    changeStudent,
  }
} 