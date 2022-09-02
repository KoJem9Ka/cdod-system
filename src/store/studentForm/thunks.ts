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
  GStudentWithParentCreateCommitMutationFn,
  GStudentWithParentUpdateCommitMutationFn,
  StudentByIdDocument,
  StudentWithParentCreateCommitDocument,
  StudentWithParentUpdateCommitDocument
}                            from '../../other/generated'
import {
  isNil,
  merge
}                            from 'lodash'
import {
  newParent,
  NonExistingID
}                            from '../../other/helpers'
import { toast }             from 'react-toastify'
import { client }            from '../../queries/client'



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

export const thunkStudentCommit = createAsyncThunk( 'studentForm/commit',
  async ( _, { rejectWithValue, getState } ) => {
    console.log( 'commiting' )
    try {
      const { studentForm: { studentModified: student } } = getState() as TAppState
      if ( isNil( student ) ) throw new TypeError( 'studentModified равен null, нечего отправлять на сервер.' )
      const isCreated = student.id === NonExistingID

      const StudentCreateInput: GStudentCreateInput = {
        lastName:   student.lastName,
        firstName:  student.firstName,
        patronymic: student.patronymic,

        birthDate:   student.birthDate,
        description: student.description,
        parentId:    student.parent.id,
        schoolId:    student.school?.id,
      }
      const StudentUpdateInput: GStudentUpdateInput = { id: student.id, ...StudentCreateInput }

      const ParentInput: GParentInput = merge( newParent(), {
        lastname:   student.parent.lastName,
        firstname:  student.parent.firstName,
        patronymic: student.parent.patronymic,

        email:       student.parent.email,
        secondEmail: student.parent.secondEmail,

        phoneNumber:       student.parent.phoneNumber,
        secondPhoneNumber: student.parent.secondPhoneNumber,

        applyingDate: student.parent.applyingDate,
        relationType: student.parent.relationType,
      } )

      const { data, errors } = isCreated
        ? await (client.mutate as GStudentWithParentCreateCommitMutationFn)( {
          mutation:  StudentWithParentCreateCommitDocument,
          variables: { student: StudentCreateInput, parent: ParentInput },
        } )
        : await (client.mutate as GStudentWithParentUpdateCommitMutationFn)( {
          mutation:  StudentWithParentUpdateCommitDocument,
          variables: { student: StudentUpdateInput, parent: ParentInput, parentId: student.parent.id },
        } )

      toast( 'Успешная отправка!' )
    }
    catch ( err ) {
      console.log( JSON.stringify( err ) )
      toast.error( JSON.stringify( err ) )
      rejectWithValue( `Ошибка при сохранении студента на сервер: ${err}` )
    }
  }
)