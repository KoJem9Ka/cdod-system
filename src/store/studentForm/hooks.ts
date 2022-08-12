import {
  TAppState,
  useAppDispatch,
  useAppSelector
}                      from '../store'
import {
  GStudentByIdQuery,
  GStudentType
}                      from '../../other/generated'
import { useCallback } from 'react'
import {
  thunkLoadStudent,
  thunkStudentCommit
}                      from './thunks'
import {
  actionStudentChange,
  actionStudentClose,
  actionStudentCreate,
  actionStudentToggleEdit
}                      from './reducer'



type T = GStudentByIdQuery['student']

const selectStudentForm = ( state1: TAppState ) => state1.studentForm

export const useStudentForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector( selectStudentForm )

  const studentSelect = useCallback( ( id: GStudentType['id'] ) => void dispatch( thunkLoadStudent( id ) ), [] )
  const studentToggleEdit = useCallback( ( value?: boolean ) => void dispatch( actionStudentToggleEdit( value ) ), [] )
  const studentCreate = useCallback( () => dispatch( actionStudentCreate() ), [] )
  const studentClose = useCallback( () => dispatch( actionStudentClose() ), [] )
  const studentChange = useCallback( ( value: Parameters<typeof actionStudentChange>[0] ) => void dispatch( actionStudentChange( value ) ), [] )
  const studentCommit = useCallback( () => dispatch( thunkStudentCommit() ), [] ) // TODO: async thunk

  return {
    ...state,
    studentSelect,

    studentToggleEdit,
    studentCreate,
    studentClose,

    studentChange,

    studentCommit,
  }
} 