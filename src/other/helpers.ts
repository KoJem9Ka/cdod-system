import {
  compact,
  mean,
  uniq
}                           from 'lodash'
import moment, { duration } from 'moment/moment'
import {
  GContractState,
  GRelationType
}                           from './generated'



const onCycle = () => {
  const seen = new WeakSet()
  return ( key: unknown, value: unknown ) => {
    if ( typeof value === 'object' && value !== null ) {
      if ( seen.has( value ) ) return
      seen.add( value )
    }
    return value
  }
}
export const getJSON = ( obj: object ) => JSON.stringify( obj, onCycle() )

export const formatDate = ( date: string | null ) => date && moment( date ).format( 'YYYY-MM-DD' )

export const humanizeDate = ( date: string | null, operation?: 'floor' ) => {
  const method = operation === 'floor' ? 'years' : 'days'
  return date && duration( moment().diff( date, method, false ), method ).humanize()
}

export const formatPhone = ( phone: string ): string => {
  const matching = phone.match( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/ )
  if ( matching?.length === 6 ) {
    const [ , , bbb, ccc, dd, ee ] = matching
    return `+7(${ bbb })${ ccc }-${ dd }-${ ee }`
  }
  return phone
}

export const strJoinSpace = ( ...strs: (string | null | undefined)[] ) => compact( strs ).join( ' ' )

export const strsNonFalsy = ( ...strings: (string | undefined)[] ): boolean => strings.every( val => val !== '' && val !== undefined )

const hexToRGB = ( hex: string ) => {
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

export const hexToRgbA = ( hex: string, opacity: number ) => `rgba(${ [ ...hexToRGB( hex ), opacity || 1 ].join( ',' ) })`

export const hexIsDark = ( hex: string ) => mean( uniq( hexToRGB( hex ) ) )! < (255 * 0.65)

export const parentTypeParse = ( relationType: GRelationType | null ): string => {
  switch ( relationType ) {
  case GRelationType.Mother:
    return 'Мама'
  case GRelationType.Father:
    return 'Папа'
  case GRelationType.Grandma:
    return 'Бабушка'
  case GRelationType.Grandpa:
    return 'Дедушка'
  case GRelationType.Brother:
    return 'Брат'
  case GRelationType.Sister:
    return 'Сестра'
  case GRelationType.Aunt:
    return 'Тетя'
  case GRelationType.Uncle:
    return 'Дядя'
  case GRelationType.Guardian:
    return 'Опекун'
    // case GRelationType.Other:
  default:
    return 'Родитель'
  }
}

export const contractStateParse = ( contractState: GContractState, who: 'text' | 'color' = 'text' ): string => {
  if ( who === 'text' )
    switch ( contractState ) {
    case GContractState.Completed:
      return 'Закончил'
    case GContractState.Consideration:
      return 'На рассмотрении'
    case GContractState.Rejected:
      return 'Отказ'
    case GContractState.Studying:
      return 'Учится'
    case GContractState.Left:
      return 'Ушёл'
    case GContractState.Excluded:
      return 'Исключён'
    }
  // if ( who === 'color' )
  switch ( contractState ) {
  case GContractState.Completed:
    return '#1473E6'
  case GContractState.Consideration:
    return '#FD6F02'
  case GContractState.Rejected:
  case GContractState.Left:
    return '#CCCCCC'
  case GContractState.Studying:
    return '#009132'
  case GContractState.Excluded:
    return '#FFDBDD'
  }
}