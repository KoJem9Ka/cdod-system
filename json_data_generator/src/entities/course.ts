import { coursesJSON } from '../app'
import { random }   from 'lodash'
import { newGroup } from './group'



export const newCourse = ( courseName: string, groupsNames: string[] ) => {
  const course_id = coursesJSON.length + 1
  coursesJSON.push( {
    id:                         course_id,
    name:                       courseName,
    price:                      random( 2000, 5000 ),
    equipmentPriceWithRobot:    courseName.includes( 'Робофабрика' ) && random( 1000, 2000 ) || undefined,
    equipmentPriceWithoutRobot: courseName.includes( 'Робофабрика' ) && random( 2500, 3000 ) || undefined,
  } )
  groupsNames.forEach( ( groupName ) => newGroup( groupName, course_id ) )
}