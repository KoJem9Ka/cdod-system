import { courses }        from './task'
import {
  TCourse,
  TGroup,
  TParent,
  TSchool,
  TStudent,
  TStudyInfo,
  TTeacher,
}                                   from '../types'
import { newCourse }                from './entities/course'
import * as fs                      from 'fs'
import { genTypes }                 from './helpers'
import { makeAllSchools }           from './entities/schools'
import { makeSomeDetachedStudents } from './entities/student'



console.clear()


export const schoolsJSON: TSchool[] = []
export const coursesJSON: TCourse[] = []
export const teachersJSON: TTeacher[] = []
export const groupsJSON: TGroup[] = []
export const parentsJSON: TParent[] = []
export const studentsJSON: TStudent[] = []
export const studyInfoJSON: TStudyInfo[] = []


void main()


function main() {
  makeAllSchools()
  courses.forEach( ( [ course, groups ] ) => newCourse( course, groups ) )
  makeSomeDetachedStudents()

  const rezObject = {
    schools:  schoolsJSON,
    courses:  coursesJSON,
    teachers: teachersJSON,
    groups:   groupsJSON,
    parents:  parentsJSON,
    students: studentsJSON,
    infos:    studyInfoJSON,
  }
  fs.writeFileSync( './../db.json', JSON.stringify( rezObject ) )
  // genTypes( rezObject, 'DB_Types.ts' )

  console.log( 'Data Generation: Finish!' )
}
