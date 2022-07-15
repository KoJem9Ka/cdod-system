import { sample }        from 'lodash'
import { faker }         from '@faker-js/faker/locale/ru'
import {
  C_contract_states,
  C_female_first_names,
  C_female_last_names,
  C_female_third_names,
  C_male_first_names,
  C_male_last_names,
  C_male_third_names,
}                        from './big_fio_datas'
import { ContractState } from '../types'



export const randFIO = () => {
  if ( Math.random() >= 0.5 )
    return {
      lastName:   sample( C_female_last_names )!,
      firstName:  sample( C_female_first_names )!,
      patronymic: sample( C_female_third_names )!,
    }
  else
    return {
      lastName:   sample( C_male_last_names )!,
      firstName:  sample( C_male_first_names )!,
      patronymic: sample( C_male_third_names )!,
    }
}

export const randDate = ( a?: string, b?: string ):string => faker.date.between( a ?? '2020-01-10', b ?? '2022-05-01' ).toISOString().slice( 0, 10 )

export const randPhone = () => faker.phone.number( '7##########' )

export const randPost = (): string => {
  const posts: [ number, string ][] = [
    [ 0.05, 'Директор ЦМИТ' ],
    [ 0.1, 'Ведущий инженер ЦМИТ' ],
    [ 0.15, 'Директор ЦДОД' ],
    [ 0.20, 'Менеджер ЦДОД' ],
  ]
  const rand = Math.random()
  for ( const [ chance, post ] of posts )
    if ( rand <= chance )
      return post
  return 'Преподаватель'
}

export const randContractState = (): ContractState => sample( C_contract_states )!