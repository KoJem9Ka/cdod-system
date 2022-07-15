import { parentsJSON } from '../app'
import {
  randDate,
  randFIO,
  randPhone,
}                      from '../generators'
import { faker }       from '@faker-js/faker/locale/ru'
import { chance }      from '../helpers'
import { TParent }     from '../../types'
import { sample }      from 'lodash'



export const takeParent = (): TParent => {
  if ( chance( 95 ) || parentsJSON.length === 0 ) {
    const { firstName, lastName, patronymic } = randFIO()
    parentsJSON.push( {
      id:                parentsJSON.length + 1,
      lastName,
      firstName,
      patronymic,
      email:             faker.internet.email(),
      phoneNumber:       randPhone(),
      applyingDate:      randDate(),
      secondEmail:       faker.internet.email(),
      secondPhoneNumber: randPhone(),
    } )
    return parentsJSON.at( -1 )!
  }
  return sample( parentsJSON )!
}