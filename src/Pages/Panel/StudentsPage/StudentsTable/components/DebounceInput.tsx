import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useState
} from 'react'



type Props = {
  value: string | number
  onChange: ( value: string | number )=> void
  debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const DebouncedInput: FC<Props> = ( { value: initialValue, onChange, debounce = 500, ...props } ) => {
  const [ value, setValue ] = useState( initialValue )

  // useEffect( () => void setValue( initialValue ), [ initialValue ] )

  useEffect( () => {
    const timeout = setTimeout( () => onChange( value ), debounce )
    return () => clearTimeout( timeout )
  }, [ value, debounce, onChange ] )

  return (
    <input { ...props } value={ value } onChange={ e => setValue( e.target.value ) }/>
  )
}

export default DebouncedInput