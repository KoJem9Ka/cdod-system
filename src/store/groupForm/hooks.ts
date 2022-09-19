import {
  store, TAppState,
  useAppDispatch,
  useAppSelector
} from '../store'
import { thunkGroupCommit, thunkLoadGroupByID, thunkLoadOtherStudents } from './thunks'
import { GGroupByIdQuery }    from '../../other/generated'
import {
  actionGroupAddStudent,
  actionGroupChange, actionGroupCreate, actionGroupRemoveStudent,
  actionGroupToggleEdit
} from './reducer'
import { isEqual }            from 'lodash'
import { shallowEqual } from 'react-redux'

type AGroup = GGroupByIdQuery['group']

const { dispatch } = store

export const GForm = {
  select            : (groupID: number, courseID: number) => void dispatch(thunkLoadGroupByID({ groupID, courseID })),
  toggleEdit        : () => void dispatch(actionGroupToggleEdit()),
  change            : (value: Parameters<typeof actionGroupChange>[0]): void => void dispatch(actionGroupChange(value)),
  addStudent        : (studentId: number) => void dispatch(actionGroupAddStudent(studentId)),
  removeStudent     : (studentId: number) => void dispatch(actionGroupRemoveStudent(studentId)),
  commit            : () => void dispatch(thunkGroupCommit()),
  create            : () => void dispatch(actionGroupCreate()),
  loadOtherStudents : (courseID: number) => void dispatch(thunkLoadOtherStudents( courseID )),
}

const selectPartialGroup = ({ groupForm: { groupModified, groupOriginal, addedIds, removedIds } }: TAppState) => ({
  groupModified, groupOriginal, addedIds, removedIds,
})

export const useIsGroupModified = () => {
  const { groupModified, groupOriginal, addedIds, removedIds } = useAppSelector(selectPartialGroup)
  return !isEqual(groupModified, groupOriginal ) || removedIds.length !== 0 ||  addedIds.length !== 0
}

type TCheckFn = (state: TAppState['groupForm'])=> any
const selectGroupForm = ({ groupForm }: TAppState) => groupForm
export const useGroupForm = (checkFn: TCheckFn) => useAppSelector(selectGroupForm,  ( a, b ) => isEqual( checkFn( a ), checkFn( b ) )
)
