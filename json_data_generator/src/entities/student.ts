import { chance }     from '../helpers'
import {
  coursesJSON,
  studentsJSON,
  studyInfoJSON,
}                     from '../app'
import {
  randContractState,
  randDate,
  randFIO,
}                     from '../generators'
import { takeParent } from './parent'
import { takeSchool } from './schools'
import { faker }      from '@faker-js/faker/locale/ru'
import {
  random,
  range,
  sample,
}                     from 'lodash'
import { TStudent }   from '../../types'



export const makeSomeDetachedStudents = () => {
  range( 0, random( 30, 50 ) ).forEach( () => takeStudent1( true ) )
}

const takeStudent1 = ( exactlyNew = false ) => {
  if ( exactlyNew || chance( 95 ) || studentsJSON.length === 0 ) {
    const { firstName, lastName, patronymic } = randFIO()
    studentsJSON.push( {
      id:          studentsJSON.length + 1,
      lastName,
      firstName,
      patronymic,
      birthDate:   randDate( '2006-07-14', '2014-07-14' ),
      parent_id:   takeParent().id,
      school_id:   takeSchool().id,
      description: chance( 25 ) && faker.lorem.sentence( random( 1, 5 ) ) || undefined,
    } )
    return studentsJSON.at( -1 )!
  }
  return sample( studentsJSON )!
}

const memory: Set<string> = new Set()
export const takeStudent = ( course_id: number, group_id: number ) => {
  let student: TStudent
  do student = takeStudent1()
  while ( memory.has( `${ student.id }_${ course_id }` ) )
  memory.add( `${ student.id }_${ course_id }` )

  const isRobo = coursesJSON.find( course => course.id === course_id )?.name.includes( 'Робофабрика' )

  studyInfoJSON.push( {
    admissionDate:   randDate(),
    contractState:   randContractState(),
    student_id:      student.id,
    course_id,
    group_id,
    isCoursePaid:    chance( 85 ),
    isEquipmentPaid: isRobo ? chance( 85 ) : undefined,
    isGetRobot:      isRobo ? chance( 50 ) : undefined,
  } )
}