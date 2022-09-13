/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-unnecessary-type-assertion */
import { ApolloQueryResult } from '@apollo/client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isEqual, isNil } from 'lodash'
import { toast } from 'react-toastify'
import {
  AllStudentsDocument,
  GParentCreateMutationFn,
  GParentInput,
  GStudentByIdQuery,
  GStudentByIdQueryVariables,
  GStudentCreateInput,
  GStudentCreateMutationFn,
  GStudentToCourseCreateInput,
  GStudentToCourseDetachInput,
  GStudentToCourseUpdateInput,
  GStudentUpdateInput,
  GStudentWithParentUpdateMutationFn,
  GStudiesCreateMutationFn,
  ParentCreateDocument,
  StudentByIdDocument,
  StudentCreateDocument,
  StudentWithParentUpdateDocument,
  StudiesCreateDocument
} from '../../other/generated'
import { CREATE, IS_CLIENT_TEMP_ID, NON_EXISTING_ID } from '../../other/helpers'
import { client } from '../../queries/client'
import { TAppDispatch, TAppState, TAppThunkConfig } from '../store'

type TStudentObjFromQuery = GStudentByIdQuery['student']
type TVariableStudentID = {
  id: GStudentByIdQueryVariables['studentID']
  referch?: true
}

export const thunkStudentLoad = createAsyncThunk<TStudentObjFromQuery, TVariableStudentID, TAppThunkConfig>('studentForm/load', async ({ id, referch }, { rejectWithValue }) => {
  let queryResult: ApolloQueryResult<GStudentByIdQuery>
  try {
    queryResult = await client.query<GStudentByIdQuery, GStudentByIdQueryVariables>({ query: StudentByIdDocument, variables: { studentID: id }, fetchPolicy: referch ? 'network-only' : undefined })
  }
  catch (e) {
    return rejectWithValue(`Произошла ошибка при загрузке студента с id = ${id}, error: ${e}`)
  }
  return queryResult.data.student
})

//TODO: Добавить отправку обучения на курсах
export const thunkStudentCommit = createAsyncThunk('studentForm/commit', async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const {
      studentForm: { studentModified: stM, studentOriginal: stO },
    } = getState() as TAppState
    if (isNil(stM) || isNil(stO)) throw new TypeError('Критическая ошибка при отправке сохранения на сервер.')

    const StudentCreateInput: GStudentCreateInput = {
      lastName   : stM.lastName ?? null,
      firstName  : stM.firstName ?? null,
      patronymic : stM.patronymic ?? null,

      birthDate   : stM.birthDate ?? null,
      description : stM.description ?? null,
      parentId    : NON_EXISTING_ID,
      schoolId    : stM.school?.id ?? null,
    }
    const StudentUpdateInput: GStudentUpdateInput = { ...StudentCreateInput, id: stM.id, parentId: stM.parent.id }

    // const ParentInput: GParentInput = merge(CREATE.parent(), stM.parent)
    const ParentInput: GParentInput = {
      ...CREATE.parent(),
      lastName          : stM.parent.lastName ?? null,
      firstName         : stM.parent.firstName ?? null,
      patronymic        : stM.parent.patronymic ?? null,
      phoneNumber       : stM.parent.phoneNumber ?? null,
      secondPhoneNumber : stM.parent.secondPhoneNumber ?? null,
      email             : stM.parent.email ?? null,
      secondEmail       : stM.parent.secondEmail ?? null,
      applyingDate      : stM.parent.applyingDate ?? null,
      relationType      : stM.parent.relationType ?? null,
    }

    const addStudies: GStudentToCourseCreateInput[] = []
    const updStudies: GStudentToCourseUpdateInput[] = []
    const delStudies: GStudentToCourseDetachInput[] = []

    for (const study of stM.info) {
      const StudentToCourseCreateInput: GStudentToCourseCreateInput = {
        studentId     : stM.id,
        courseId      : study.course.id,
        admissionDate : study.admissionDate,
        contractState : study.contractState,
        contractUrl   : null,
        groupId       : null,
        isGetRobot    : null,
      }
      const StudentToCourseUpdateInput: GStudentToCourseUpdateInput = {
        ...StudentToCourseCreateInput,
        attempt : study.attempt,
      }
      const old = stO.info.find(info => info.course.id === study.course.id && info.attempt === study.attempt)
      // число даты (1 янв. 2000г.) такое большое (949352400000), что вероятность нормального attempt превысить его невероятно мала
      // а в новых, ещё не отправленных на сервер, обучениях ставится число сегодняшней даты, т.е. она всегда больше чем 1 янв. 2000г.
      if (IS_CLIENT_TEMP_ID(study.attempt)) !IS_CLIENT_TEMP_ID(study.course.id) && addStudies.push(StudentToCourseCreateInput)
      else if (!isEqual(old, study)) updStudies.push(StudentToCourseUpdateInput)
    }
    for (const study of stO.info)
      if (!stM.info.find(el => el.course.id === study.course.id && el.attempt === study.attempt))
        delStudies.push({
          courseId  : study.course.id,
          studentId : stO.id,
          attempt   : study.attempt,
        })

    let updatableStudentId = stO.id

    console.log({
      StudentUpdateInput,
      ParentInput,
      parentId : stM.parent.id,
      addStudies,
      updStudies,
      delStudies,
    })

    if (IS_CLIENT_TEMP_ID(stM.id)) {
      const res1 = await (client.mutate as GParentCreateMutationFn)({
        mutation  : ParentCreateDocument,
        variables : { parent: ParentInput },
      })
      if (isNil(res1.data?.newParent.id)) return rejectWithValue('Не удалось создать родителя')
      StudentCreateInput.parentId = res1.data!.newParent.id
      console.log(`parentId: ${res1.data!.newParent.id}`)
      console.log({ StudentCreateInput })
      const res2 = await (client.mutate as GStudentCreateMutationFn)({
        mutation  : StudentCreateDocument,
        variables : { student: StudentCreateInput },
      })
      if (isNil(res1.data?.newParent.id)) return rejectWithValue('Не удалось создать студента')
      updatableStudentId = res2.data!.newStudent.id
      for (const el of addStudies) el.studentId = updatableStudentId
      console.log(`updatableStudentId: ${updatableStudentId}`)
      await (client.mutate as GStudiesCreateMutationFn)({
        mutation       : StudiesCreateDocument,
        variables      : { addStudies },
        refetchQueries : [ { query: AllStudentsDocument } ],
      })
    }
    else {
      await (client.mutate as GStudentWithParentUpdateMutationFn)({
        mutation       : StudentWithParentUpdateDocument,
        variables      : { student: StudentUpdateInput, parent: ParentInput, parentId: stM.parent.id, addStudies, delStudies, updStudies },
        refetchQueries : [ { query: AllStudentsDocument } ],
      })
    }

    (dispatch as TAppDispatch)(thunkStudentLoad({ id: updatableStudentId, referch: true }))
    toast('Успешная отправка!')
  }
  catch (err) {
    console.log(JSON.stringify(err))
    toast.error(JSON.stringify(err))
    rejectWithValue(`Ошибка при отправке студента на сервер: ${err}`)
  }
})
