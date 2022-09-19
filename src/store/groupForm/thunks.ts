import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAppDispatch, TAppState, TAppThunkConfig } from '../store'
import { ApolloQueryResult } from '@apollo/client'
import {
  GContractState, GGroupAttachStudentsMutationFn,
  GGroupByIdQuery,
  GGroupByIdQueryVariables,
  GGroupCreateInput, GGroupCreateMutationFn,
  GGroupUpdateInput,
  GGroupUpdateWithStudiesMutationFn,
  GOtherStudentsByCourseIdQuery,
  GOtherStudentsByCourseIdQueryVariables, GroupAttachStudentsDocument,
  GroupByIdDocument, GroupCreateDocument,
  GroupsDocument,
  GroupUpdateWithStudiesDocument,
  GStudentToCourseUpdateInput, OtherStudentsByCourseIdDocument
} from '../../other/generated'
import { client } from '../../queries/client'
import { toast } from 'react-toastify'
import { isNil } from 'lodash'
import dayjs from 'dayjs'
import { IS_CLIENT_TEMP_ID, NON_EXISTING_ID } from '../../other/helpers'

type LoadGroupByIDParams = {
  groupID: number
  courseID: number
  refetch?: true
}


export const thunkLoadGroupByID = createAsyncThunk<GGroupByIdQuery, LoadGroupByIDParams, TAppThunkConfig>('groupForm/load',
  async ({ groupID, courseID, refetch }, { rejectWithValue }) => {
    let queryResult: ApolloQueryResult<GGroupByIdQuery>
    try {
      queryResult = await client.query<GGroupByIdQuery, GGroupByIdQueryVariables>({
        query       : GroupByIdDocument,
        variables   : { groupID, courseID },
        fetchPolicy : refetch ? 'network-only' : undefined,
      })
    }
    catch (e) {
      return rejectWithValue(`Произошла ошибка при загрузке группы с id = ${groupID}, error: ${e}`)
    }
    return queryResult.data
  }
)

export const thunkLoadOtherStudents = createAsyncThunk<GOtherStudentsByCourseIdQuery, number, TAppThunkConfig>('groupForm/loadOtherStudents', async (courseID, { rejectWithValue }) => {
  let queryResult: ApolloQueryResult<GOtherStudentsByCourseIdQuery>
  try {
    queryResult = await client.query<GOtherStudentsByCourseIdQuery, GOtherStudentsByCourseIdQueryVariables>({
      query     : OtherStudentsByCourseIdDocument,
      variables : { courseID },
    })
  }
  catch (e) {
    return rejectWithValue(`Произошла ошибка при загрузке студентов из курса с id = ${courseID}, error: ${e}`)
  }
  return queryResult.data
})

export const thunkGroupCommit = createAsyncThunk('groupForm/commit', async (_, {
  rejectWithValue,
  getState,
  dispatch,
}) => {
  try {
    const { groupForm: { groupOriginal: gO, groupModified: gM, removedIds, addedIds, students, otherStudents } } = getState() as TAppState
    if (isNil(gO) || isNil(gM)) throw 'Нечего отправлять'
    
    const GroupCreateInput: GGroupCreateInput = {
      name      : gM.name,
      courseId  : gM.course.id,
      startDate : dayjs().format('YYYY-MM-DD'),
      teacherId : gM.teacher.id,
    }
    
    const GroupUpdateInput: GGroupUpdateInput = {
      id        : gM.id,
      name      : gM.name,
      teacherId : gM.teacher.id,
      startDate : null,
    }
    
    const StudentsToCourseInput: GStudentToCourseUpdateInput[] = [ ...removedIds.map(id => ({
      studentId     : id,
      courseId      : gM.course.id,
      //TODO: Суперплохая проверка, возможны технические шоколадки...
      attempt       : students.find(student => student.id === id)!.info.find(study => /*study.courseId === gM.course.id && (study.contractState === GContractState.Studying || study.contractState === GContractState.Consideration) && */ study.group?.id === gM.id)!.attempt,
      admissionDate : null,
      contractState : null,
      contractUrl   : null,
      groupId       : NON_EXISTING_ID,
      isGetRobot    : null,
    })),
    ...addedIds.map(id => ({
      studentId     : id,
      courseId      : gM.course.id,
      //TODO: Суперплохая проверка 2, ваще не знаем, че произойдёт...
      attempt       : otherStudents.find(student => student.id === id)!.info.find(study => study.courseId === gM.course.id && (study.contractState === GContractState.Studying || study.contractState === GContractState.Consideration))!.attempt,
      admissionDate : null,
      contractState : null,
      contractUrl   : null,
      groupId       : gM.id,
      isGetRobot    : null,
    })) ]
    
    await client.resetStore()
    
    let updatableGroupId = gM.id
    
    if (IS_CLIENT_TEMP_ID(gM.id)) {
      const res = await (client.mutate as GGroupCreateMutationFn)({
        mutation  : GroupCreateDocument,
        variables : { group: GroupCreateInput },
      })
      if (isNil(res.data)) return rejectWithValue('Не удалось создать группу')
      updatableGroupId = res.data.groupCreate.id
      StudentsToCourseInput.forEach(el => el.groupId = updatableGroupId)
      await (client.mutate as GGroupAttachStudentsMutationFn)({
        mutation       : GroupAttachStudentsDocument,
        variables      : { studies: StudentsToCourseInput },
        refetchQueries : [ { query: GroupsDocument } ],
      })
    }
    else {
      await (client.mutate as GGroupUpdateWithStudiesMutationFn)({
        mutation       : GroupUpdateWithStudiesDocument,
        variables      : { group: [ GroupUpdateInput ], studies: StudentsToCourseInput },
        refetchQueries : [ { query: GroupsDocument } ],
      })
    }
  
    await (dispatch as TAppDispatch)(thunkLoadGroupByID({ groupID: updatableGroupId, courseID: gM.course.id, refetch: true }))
    toast('Успешная отправка!')
  }
  catch (e) {
    console.error(e)
    toast.error(JSON.stringify(e))
    rejectWithValue(e)
  }
})