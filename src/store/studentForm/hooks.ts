import {
  store,
  TAppState,
  useAppSelector
}                       from '../store'
import { GStudentType } from '../../other/generated'
import {
  thunkStudentCommit,
  thunkStudentLoad
}                       from './thunks'
import {
  actionStudentChange,
  actionStudentClose,
  actionStudentCreate,
  actionStudentStudyChange,
  actionStudentStudyCreate,
  actionStudentStudyDelete,
  actionStudentToggleEdit
}                       from './reducer'
import { isEqual }      from 'lodash'



const { dispatch } = store // Нормально это или нет .. неизвестно ...
// ... и пошло поехало, зато все функции статичные 😎 и не нужен useCallback
export const StForm = {
  select      : ( id: GStudentType['id'] ) => void dispatch( thunkStudentLoad( id ) ),
  toggleEdit  : (): void => void dispatch( actionStudentToggleEdit() ),
  createStudy : (): void => void dispatch( actionStudentStudyCreate() ),
  changeStudy : ( value: Parameters<typeof actionStudentStudyChange>[0] ): void => void dispatch( actionStudentStudyChange( value ) ),
  delStudy    : ( value: Parameters<typeof actionStudentStudyDelete>[0] ): void => void dispatch( actionStudentStudyDelete( value ) ),
  create      : (): void => void dispatch( actionStudentCreate() ),
  close       : (): void => void dispatch( actionStudentClose() ),
  change      : ( value: Parameters<typeof actionStudentChange>[0] ): void => void dispatch( actionStudentChange( value ) ),
  commit      : (): void => void dispatch( thunkStudentCommit() ),
} as const

type TCheckFn = ( state: TAppState['studentForm'] )=> any
const selectStudentForm     = ( { studentForm }: TAppState ) => studentForm
export const useStudentForm = ( checkFn: TCheckFn ) => useAppSelector(
  selectStudentForm,
  ( a, b ) => isEqual( checkFn( a ), checkFn( b ) )
)