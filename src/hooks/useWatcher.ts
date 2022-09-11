import { usePrevious }  from './usePrevious'
import { shallowEqual } from 'react-redux'
import { useEffect }    from 'react'



export const useWatcher = <T>( value: T, callback: Function ) => {
  const prevValue = usePrevious( value, true )
  const different = !shallowEqual( prevValue, value )
  useEffect( () => {
    if ( different ) callback()
  }, [ value ] )
}