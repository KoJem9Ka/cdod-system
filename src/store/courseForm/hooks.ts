import { useAppDispatch, useAppSelector } from '../store'
import { actionCourseChange, actionCourseClose, actionCourseToggleEdit } from './reducer'
import { GCourseByIdQuery } from '../../other/generated'
import { thunkLoadCourseById } from './thunks'

type T = GCourseByIdQuery['course']


export const useCourseForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state1 => state1.courseForm)
  
  const selectCourse = (id: T['id']) => void dispatch(thunkLoadCourseById(id))
  const toggleEdit = (value?: boolean) => void dispatch(actionCourseToggleEdit(value))
  const changeCourse = (value: Partial<Omit<T, 'id'>>) => void dispatch(actionCourseChange(value))
  const closeCourseForm = () => void dispatch(actionCourseClose())
  
  return {
    ...state,
    toggleEdit,
    selectCourse,
    changeCourse,
    closeCourseForm,
  }
}