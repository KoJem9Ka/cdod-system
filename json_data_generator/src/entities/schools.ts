import { TSchool }     from '../../types'
import { sample }      from 'lodash'
import { schoolsJSON } from '../app'
import { C_schools }   from '../big_fio_datas'



export const makeAllSchools = () => C_schools.forEach( ( school, index ) => {
  schoolsJSON.push( {
    id:       index + 1,
    name:     school.name,
    district: school.district,
  } )
} )
export const takeSchool = (): TSchool => sample( schoolsJSON )!