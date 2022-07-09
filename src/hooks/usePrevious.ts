import { useEffect, useRef } from 'react'

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>( value )
  useEffect( () => void (ref.current = value), [ value ] )
  return ref.current
}