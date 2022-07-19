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

export const formatPhone = ( phone: string ): string => {
  const matching = phone.match( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/ )
  if ( matching?.length === 6 ) {
    const [ , , bbb, ccc, dd, ee ] = matching
    return `+7(${ bbb })${ ccc }-${ dd }-${ ee }`
  }
  return phone
}