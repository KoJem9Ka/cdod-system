import { TTeacher }     from '../../types'
import { teachersJSON } from '../app'
import { faker }        from '@faker-js/faker/locale/ru'
import { chance }       from '../helpers'
import { sample }       from 'lodash'
import {
  randFIO,
  randPhone,
  randPost,
}                       from '../generators'



export const takeTeacher = (): TTeacher => {
  if ( chance( 75 ) || teachersJSON.length === 0 ) {
    const { firstName, lastName, patronymic } = randFIO()
    teachersJSON.push( {
      id:         teachersJSON.length + 1,
      lastName:   lastName,
      firstName:  firstName,
      patronymic: patronymic,
      phone:      randPhone(),
      email:      faker.internet.email(),
      isAdmin:    chance( 5 ),
      post:       randPost(),
    } )
    return teachersJSON.at( -1 )!
  } else {
    return sample( teachersJSON )!
  }
}