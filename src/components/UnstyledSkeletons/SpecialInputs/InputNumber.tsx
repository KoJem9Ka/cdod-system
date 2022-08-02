import React, {
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'



type Props = {
  value: number | '' | '-'
  handler: ( value: number )=> void
  min?: number
  max?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'min' | 'max'>
const InputNumber: FC<Props> = ( { value, handler, min = -Infinity, max = Infinity, ...props } ) => {
  const [ value1, setValue1 ] = useState( value )
  const inputRef = useRef<HTMLInputElement>( null )

  useEffect( () => {
    value !== value1 && setValue1( value )
    inputRef.current?.addEventListener( 'focusout', onFocusout )
    return () => inputRef.current?.removeEventListener( 'focusout', onFocusout )
  }, [ value ] )

  const onFocusout = useCallback( () => setValue1( value ), [ value ] )
  const changeHandler = ( str1: string ) => {
    const str = str1
        .replace( /-0+/, '-' )
        .replace( /^0+(?=\d)/, '' )
    let num = +str || 0
    const isEmpty = str === '' || str === '-'
    const validInput = /^(-?\d*|)$/.test( str )
    const validNumber = /^-?\d+$/.test( str )
    const okLeft = num >= min
    const okRight = num <= max
    !okLeft && (num = min)
    !okRight && (num = max)
    validInput && setValue1( isEmpty ? str : num )
    validNumber && handler( num )
  }

  return (
    <input
      ref={ inputRef }
      { ...props }
      type='text'
      value={ value1 }
      onChange={ e => changeHandler( e.currentTarget.value ) }
      onWheel={ e => {
        const val = typeof value === 'number' ? value : 0
        const delta = e.shiftKey ? 10 : 1
        changeHandler( `${ e.deltaY > 0 ? val - delta : val + delta }` )
      } }
    />
  )
}

export default InputNumber