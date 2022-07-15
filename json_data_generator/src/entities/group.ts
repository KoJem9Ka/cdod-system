import { groupsJSON }  from '../app'
import { takeTeacher } from './teacher'
import {
  random,
  range,
}                      from 'lodash'
import { randDate }    from '../generators'
import { takeStudent } from './student'



export const newGroup = ( name: string, course_id: number ) => {
  let group = {
    id:         groupsJSON.length + 1,
    name,
    course_id,
    teacher_id: takeTeacher().id,
    startDate:  randDate(),
  }
  groupsJSON.push( group )
  range( 1, random( 7, 25 ) ).forEach( () => takeStudent( course_id, group.id ) )
}