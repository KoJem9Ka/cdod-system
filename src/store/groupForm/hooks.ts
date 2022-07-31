import { useAppDispatch, useAppSelector } from '../store'
import { thunkLoadGroupByID } from './thunks'
import { GGroupByIdQuery } from '../../other/generated'
import { actionGroupChange, actionGroupToggleEdit } from './reducer'
import { isEqual } from 'lodash'

type AGroup = GGroupByIdQuery['group']

export const useGroupForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state1 => state1.groupForm)
	
  const selectGroup = (id: AGroup['id']) => void dispatch(thunkLoadGroupByID(id))
  const toggleEdit = (value?: boolean) => void dispatch(actionGroupToggleEdit(value))
  const changeGroup = (value: Partial<Omit<AGroup, 'id'>>) => void dispatch(actionGroupChange(value))
	
  const isModified = () => !isEqual(state.groupModified, state.groupOriginal) && state.removedIds.length === 0 && state.addedIds.length === 0
	
  return {
    ...state,
    selectGroup,
    toggleEdit,
    changeGroup,
    isModified,
  }
}