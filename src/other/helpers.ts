import { compact }          from 'lodash'
import moment, { duration } from 'moment/moment'



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

export const humanizeDate = ( date: string | null ) => duration( moment().diff( date, 'years', false ), 'years' ).humanize()

export const formatPhone = ( phone: string ): string => {
  const matching = phone.match( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/ )
  if ( matching?.length === 6 ) {
    const [ , , bbb, ccc, dd, ee ] = matching
    return `+7(${ bbb })${ ccc }-${ dd }-${ ee }`
  }
  return phone
}

export const strCat = ( ...strs: (string | null | undefined)[] ) => compact( strs ).join( ' ' )

export const strsNonFalsy = ( ...strings: (string | undefined)[] ): boolean => strings.every( val => val !== '' && val !== undefined )

export const hexToRgbA = (hex: string, opacity: number) => {
  let c: any
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if(c.length === 3) {
      c = [ c[0], c[0], c[1], c[1], c[2], c[2] ]
    }
    c = '0x' + c.join('')
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity || 1})`
  }
  throw new Error('Bad Hex')
}