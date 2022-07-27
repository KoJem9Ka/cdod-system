import {
  useAppDispatch,
  useAppSelector
}                           from '../store'
import {
  GStudentQuery,
  GStudentType
}                           from '../../other/generated'
import { useCallback }      from 'react'
import { thunkLoadStudent } from './thunks'
import {
  actionChangeStudent,
  actionToggleEdit
}                           from './reducer'



type T = GStudentQuery['student']


export const useStudentForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector( state1 => state1.studentForm )

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