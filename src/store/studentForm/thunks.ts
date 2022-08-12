/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-unnecessary-type-assertion */
import { createAsyncThunk }  from '@reduxjs/toolkit'
import {
  TAppState,
  TAppThunkConfig
}                            from '../store'
import { ApolloQueryResult } from '@apollo/client'
import {
  GParentInput,
  GStudentByIdQuery,
  GStudentByIdQueryVariables,
  GStudentCreateInput,
  GStudentUpdateInput,
  GStudentWithParentCreateCommitMutation,
  GStudentWithParentCreateCommitMutationVariables,
  GStudentWithParentUpdateCommitMutation,
  GStudentWithParentUpdateCommitMutationVariables,
  StudentByIdDocument,
  StudentWithParentCreateCommitDocument,
  StudentWithParentUpdateCommitDocument
}                            from '../../other/generated'
import { isNil }             from 'lodash'
import { CNonExistingID }    from '../../other/helpers'
import { toast }             from 'react-toastify'
import { client }            from '../../queries/client'



type TStudentObjFromQuery = GStudentByIdQuery['student']
type TVariableStudentID = GStudentByIdQueryVariables['studentID']

export const thunkLoadStudent = createAsyncThunk<TStudentObjFromQuery, TVariableStudentID, TAppThunkConfig>( 'studentForm/load',
  async ( id, { rejectWithValue } ) => {
    let queryResult: ApolloQueryResult<GStudentByIdQuery>
    try {
      queryResult = await client.query<GStudentByIdQuery, GStudentByIdQueryVariables>( { query: StudentByIdDocument, variables: { studentID: id } } )
    }
    catch ( e ) {
      return rejectWithValue( `Произошла ошибка при загрузке студента с id = ${ id }, error: ${ e }` )
    }
    return queryResult.data.student
  }
)

export const thunkStudentCommit = createAsyncThunk( 'studentForm/commit',
  async ( _, { rejectWithValue, getState } ) => {
    console.log( 'commiting' )
    try {
      const { studentForm: { studentModified } } = getState() as TAppState
      if ( isNil( studentModified ) ) throw new TypeError( 'studentModified равен null, нечего отправлять на сервер.' )
      const isCreated = studentModified.id === CNonExistingID

      const StudentCreateInput: GStudentCreateInput = {
        lastName:    studentModified.lastName,
        firstName:   studentModified.firstName,
        patronymic:  studentModified.patronymic,
        birthDate:   studentModified.birthDate,
        description: studentModified.description,
        parentId:    studentModified.parent.id,
        schoolId:    studentModified.school?.id ?? null,
      }
      const StudentUpdateInput: GStudentUpdateInput = { id: studentModified.id, ...StudentCreateInput }
      const ParentInput: GParentInput = {
        lastname:   studentModified.parent.lastName,
        firstname:  studentModified.parent.firstName,
        patronymic: studentModified.parent.patronymic,

        email:             studentModified.parent.email,
        secondEmail:       studentModified.parent.secondEmail,
        phoneNumber:       studentModified.parent.phoneNumber,
        secondPhoneNumber: studentModified.parent.secondPhoneNumber,

        applyingDate: studentModified.parent.applyingDate,
        relationType: studentModified.parent.relationType,

        address:       null,
        birthday:      null,
        education:     null,
        inn:           null,
        passportCode:  null,
        passportDate:  null,
        passportIssue: null,
        passportNo:    null,
        password:      null,
        snils:         null,
      }

      const { data, errors } = isCreated
        ? await client.mutate<GStudentWithParentCreateCommitMutation, GStudentWithParentCreateCommitMutationVariables>( {
          mutation:  StudentWithParentCreateCommitDocument,
          variables: { student: StudentCreateInput, parent: ParentInput },
        } )
        : await client.mutate<GStudentWithParentUpdateCommitMutation, GStudentWithParentUpdateCommitMutationVariables>( {
          mutation:  StudentWithParentUpdateCommitDocument,
          variables: { student: StudentUpdateInput, parent: ParentInput, parentId: studentModified.parent.id },
        } )

    }
    catch ( err ) {
      console.log( JSON.stringify( err ) )
      toast( JSON.stringify( err ) )
      rejectWithValue( `Ошибка при сохранении студента на сервер, error: ${ err }` )
    }
  }
)