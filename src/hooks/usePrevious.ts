/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  useEffect,
  useRef
} from 'react'



export const usePrevious = <T,
  INIT extends boolean,
  REZ extends INIT extends true ? T : T | undefined>
( value: T, initial?: INIT ) => {
  const ref = useRef( initial ? value : undefined )
  useEffect( () => void (ref.current = value), [ value ] )
  return ref.current as REZ
}
