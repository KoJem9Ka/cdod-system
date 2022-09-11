import React, { FC, InputHTMLAttributes, useCallback, useEffect, useState } from 'react'
import { usePrevious } from '../../../hooks/usePrevious'

export type DebouncedInputProps = {
  value: string | number
  onChange: (value: string | number)=> void
  debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const DebouncedInput: FC<DebouncedInputProps> = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [ value, setValue ] = useState(initialValue)
  const prevValue = usePrevious(value)
  useEffect(() => void setValue(initialValue), [ initialValue ])

  const executor = useCallback(() => onChange(value), [ onChange, value ])

  useEffect(() => {
    const timeout = setTimeout(executor, debounce)
    return () => clearTimeout(timeout)
  }, [ value, debounce ])

  return (
    <input
      {...props}
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export default DebouncedInput
