import axios, { AxiosResponse } from 'axios'
import { TStudent }             from '../other/typesOLD'
import { GStudent }             from '../other/generated'

const BASE_URL = 'http://localhost:3001'

export type TApi = typeof api
export const api = {
  // getUser      : (): void => undefined,
  // studentsTable: {
  //   get: async (): Promise<AxiosResponse<TStudent[]>> => await axios.get<TStudent[]>( `${BASE_URL}/students` ),
  // },
  getStudent: async (id: GStudent['id']) => {

  },
}
