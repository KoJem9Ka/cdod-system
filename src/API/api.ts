export {}
// import { GStudent }      from '../other/generated'
// import { client }        from '../index'
// import {
//   GStudentQuery,
//   GStudentQueryVariables,
//   StudentDocument
// } from '../store/studentsForm/Student.generated_ok'
//
//
//
// const BASE_URL = 'http://localhost:3001'
//
// export type TApi = typeof api
// export const api = {
//   // getUser      : (): void => undefined,
//   // studentsTable: {
//   //   get: async (): Promise<AxiosResponse<TStudent[]>> => await axios.get<TStudent[]>( `${BASE_URL}/students` ),
//   // },
//   getStudent: async ( id: GStudent['id'] ) => {
//     const { error, data } = await client.query<GStudentQuery, GStudentQueryVariables>( { query: StudentDocument, variables: { studentID: id } } )
//     return error ?? data.student
//   },
// }
