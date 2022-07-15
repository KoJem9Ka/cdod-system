import {
  useAppDispatch,
  useAppSelector
}                              from '../store'
import { GStudent }            from '../../other/generated'
import { actionSelectStudent } from './reducer'
import { useCallback }         from 'react'



export const useStudentForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector( state1 => state1.studentForm )

  const selectStudent = useCallback( ( id: GStudent['id'] ) => void dispatch( actionSelectStudent( id ) ), [] )

  return {
    ...state,
    selectStudent,
  }
} 