import { groupsJSON }  from '../app'
import { takeTeacher } from './teacher'
import {
  random,
  range,
}                      from 'lodash'
import { randDate }    from '../generators'
import { takeStudent } from './student'
import { TGroup }      from '../../types'



export const newGroup = ( name: string, course_id: number ) => {
  const studentsCount = random( 7, 25 )
  const group: TGroup = {
    id:         groupsJSON.length + 1,
    name,
    course_id,
    teacher_id: takeTeacher().id,
    startDate:  randDate(),
    studentsCount,
  }
  groupsJSON.push( group )
  range( 1, studentsCount ).forEach( () => takeStudent( course_id, group.id ) )
}