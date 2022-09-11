/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-unnecessary-type-assertion */
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  TAppState,
  TAppThunkConfig
}                           from '../store'
import {
  ApolloError,
  ApolloQueryResult
}                           from '@apollo/client'
import {
  AllStudentsDocument,
  GParentInput,
  GStudentByIdQuery,
  GStudentByIdQueryVariables,
  GStudentCreateInput,
  GStudentUpdateInput,
  GStudentWithParentCreateCommitMutationFn,
  GStudentWithParentUpdateCommitMutationFn,
  StudentByIdDocument,
  StudentWithParentCreateCommitDocument,
  StudentWithParentUpdateCommitDocument
}                           from '../../other/generated'
import { isNil }            from 'lodash'
import {
  CREATE,
  NON_EXISTING_ID
}                           from '../../other/helpers'
import { toast }            from 'react-toastify'
import { client }           from '../../queries/client'



type TStudentObjFromQuery = GStudentByIdQuery['student']
type TVariableStudentID = GStudentByIdQueryVariables['studentID']

export const thunkStudentLoad = createAsyncThunk<TStudentObjFromQuery, TVariableStudentID, TAppThunkConfig>( 'studentForm/load',
  async ( id, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GStudentByIdQuery>
    try {
      queryResult = await client.query<GStudentByIdQuery, GStudentByIdQueryVariables>( { query: StudentByIdDocument, variables: { studentID: id } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке студента с id = ${id}, error: ${e}` )
    }
    return queryResult.data.student
  }
)

//TODO: Добавить отправку обучения на курсах
export const thunkStudentCommit = createAsyncThunk( 'studentForm/commit',
  async ( _, { rejectWithValue, getState } ) => {
    try {
      const { studentForm: { studentModified: st } } = getState() as TAppState
      if ( isNil( st ) ) throw new TypeError( 'studentModified равен null, нечего отправлять на сервер.' )
      const isCreated = st.id === NON_EXISTING_ID

      const StudentCreateInput: GStudentCreateInput = {
        lastName   : st.lastName ?? null,
        firstName  : st.firstName ?? null,
        patronymic : st.patronymic ?? null,

        birthDate   : st.birthDate ?? null,
        description : st.description ?? null,
        parentId    : st.parent.id,
        schoolId    : st.school?.id ?? null,
      }
      const StudentUpdateInput: GStudentUpdateInput = { id: st.id, ...StudentCreateInput }

      const ParentInput: GParentInput = {
        ...CREATE.parent(),
        lastname          : st.parent.lastName ?? null,
        firstname         : st.parent.firstName ?? null,
        patronymic        : st.parent.patronymic ?? null,
        relationType      : st.parent.relationType ?? null,
        applyingDate      : st.parent.applyingDate ?? null,
        phoneNumber       : st.parent.phoneNumber ?? null,
        secondPhoneNumber : st.parent.secondPhoneNumber ?? null,
        email             : st.parent.email ?? null,
        secondEmail       : st.parent.secondEmail ?? null,
      }

      isCreated
        ? await (client.mutate as GStudentWithParentCreateCommitMutationFn)( {
          mutation       : StudentWithParentCreateCommitDocument,
          variables      : { student: StudentCreateInput, parent: ParentInput },
          refetchQueries : [ { query: AllStudentsDocument }, { query: StudentByIdDocument } ],
        } )
        : await (client.mutate as GStudentWithParentUpdateCommitMutationFn)( {
          mutation       : StudentWithParentUpdateCommitDocument,
          variables      : { student: StudentUpdateInput, parent: ParentInput, parentId: st.parent.id },
          refetchQueries : [ { query: AllStudentsDocument }, { query: StudentByIdDocument } ],
        } )

      toast( 'Успешная отправка!' )
    }
    // @ts-ignore
    catch ( err: ApolloError ) {
      console.log( JSON.stringify( err.message ) )
      toast.error( JSON.stringify( err.message ) )
      rejectWithValue( `Ошибка при сохранении студента на сервер: ${err.message}` )
    }
  }
)