import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export type TApi = typeof api
export const api = {
  getUser: (): void => undefined,
  studentsTable: {
    get: async () => {
      const data = axios.get( `${BASE_URL}/students` )
      console.log( data )
      return data
    },
  },
}
