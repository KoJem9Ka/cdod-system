import {
  cloneDeep,
  compact,
  invert,
  isNil,
  mean,
  merge,
  uniq
}                           from 'lodash'
import moment, { duration } from 'moment/moment'
import {
  GContractState,
  GInfoType,
  GParentType,
  GRelationType,
  GStudentByIdQuery
}                           from './generated'



export const IS_DEV = process.env.NODE_ENV === 'development'

export const mergeState = <A, B>( a: A, b: B ): A & B => merge( cloneDeep( a ), b )

const onCycle = () => {
  const seen = new WeakSet()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return ( key: unknown, value: unknown ) => {
    if ( typeof value === 'object' && value !== null ) {
      if ( seen.has( value ) ) return
      seen.add( value )
    }
    return value
  }
}
export const getJSON = ( obj?: object | null ) => JSON.stringify( obj, onCycle() )

export const formatDate = ( date: string | null ) => (date ? moment( date ).format( 'YYYY-MM-DD' ) : null)

export const humanizeDate = ( date: string | null, operation?: 'floor' ) => {
  const method = operation === 'floor' ? 'years' : 'days'
  return date && duration( moment().diff( date, method, false ), method ).humanize()
}

export const formatPhone = ( phone: string ): string => {
  const matching = phone.match( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/ )
  if ( matching?.length === 6 ) {
    const [ , , bbb, ccc, dd, ee ] = matching
    return `+7(${bbb})${ccc}-${dd}-${ee}`
  }
  return phone
}

export const strJoinSpace = ( ...strs: (string | null | undefined)[] ) => compact( strs ).join( ' ' )

export const strsNonFalsy = ( ...strings: (string | undefined)[] ): boolean => strings.every( val => val !== '' && val !== undefined )

const hexToRGB = ( hex: string ) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let c: any
  if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ) {
    c = hex.substring( 1 ).split( '' )
    if ( c.length === 3 )
      c = [ c[0], c[0], c[1], c[1], c[2], c[2] ]
    c = '0x' + c.join( '' )
    return [ (c >> 16) & 255, (c >> 8) & 255, c & 255 ]
  }
  throw new Error( 'Bad Hex' )
}

export const hexToRgbA = ( hex: string, opacity: number ) => `rgba(${[ ...hexToRGB( hex ), opacity || 1 ].join( ',' )})`

export const hexIsDark = ( hex: string ) => mean( uniq( hexToRGB( hex ) ) ) < (255 * 0.65)


export type TRelationTypeKey = keyof typeof relationTypeDecoder
export type TRelationTypeString = typeof relationTypeDecoder[TRelationTypeKey]
export const relationTypeDecoder/*: Record<GRelationType, string>*/ = {
  [GRelationType.Mother]:    'Мама',
  [GRelationType.Father]:    'Папа',
  [GRelationType.Grandma]:   'Бабушка',
  [GRelationType.Grandpa]:   'Дедушка',
  [GRelationType.Brother]:   'Брат',
  [GRelationType.Sister]:    'Сестра',
  [GRelationType.Aunt]:      'Тетя',
  [GRelationType.Uncle]:     'Дядя',
  [GRelationType.Godparent]: 'Крёстный(ая)',
  [GRelationType.Guardian]:  'Опекун',
  [GRelationType.Other]:     'Родитель',
} as const
export const relationTypeEncoder = invert( relationTypeDecoder )
//TODO: Крёстный(ая), тут вылезет ошибка, когда добавят тип в БД) 😎
export const parseParentType = ( relationType1: GParentType['type'] ): TRelationTypeString => (isNil( relationType1 )
  ? 'Родитель'
  : relationTypeDecoder[relationType1])


const contractStateDecoder = {
  [GContractState.Completed]:     'Закончил',
  [GContractState.Consideration]: 'На рассмотрении',
  [GContractState.Rejected]:      'Отказ',
  [GContractState.Studying]:      'Учится',
  [GContractState.Left]:          'Ушёл',
  [GContractState.Excluded]:      'Исключён',
}
const contractStateColorizer = {
  [GContractState.Completed]:     '#1473E6',
  [GContractState.Consideration]: '#FD6F02',
  [GContractState.Rejected]:      '#CCCCCC',
  [GContractState.Studying]:      '#009132',
  [GContractState.Left]:          '#CCCCCC',
  [GContractState.Excluded]:      '#FFDBDD',
}
export const parseContractState = ( contractState1: GInfoType['contractState'], who: 'text' | 'color' = 'text' ): string => (who === 'text'
  ? contractStateDecoder[contractState1]
  : contractStateColorizer[contractState1])

export const CNonExistingID = -1

export const newStudent = (): GStudentByIdQuery['student'] => ({
  id:          CNonExistingID,
  lastName:    null,
  firstName:   null,
  patronymic:  null,
  birthDate:   null,
  description: null,
  school:      null,
  info:        [],
  parent:      {
    id:                0,
    lastName:          null,
    firstName:         null,
    patronymic:        null,
    applyingDate:      moment().format( 'YYYY-MM-DD' ),
    email:             '',
    phoneNumber:       null,
    relationType:      null,
    secondEmail:       null,
    secondPhoneNumber: null,
  },
})

type TJwt = {
  'emailaddress': string
  'role': string
  'exp': 1662018919
  'iss': string
  'aud': string
}
export const parseJwt = <T extends string | null>( token: T ): T extends string ? TJwt : null => {
  if ( token === null ) return null as any
  const base64Url = token.split( '.' )[1]
  const base64 = base64Url.replace( /-/g, '+' ).replace( /_/g, '/' )
  let jsonPayload = decodeURIComponent( window.atob( base64 ).split( '' ).map( c => '%' + ('00' + c.charCodeAt( 0 ).toString( 16 )).slice( -2 ) ).join( '' ) )
  jsonPayload = jsonPayload.replace( /(?<=(,|{)").+?\/(?=[a-z]+")/g, '' )
  return JSON.parse( jsonPayload )
}


