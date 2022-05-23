import React, { forwardRef, useEffect, useRef } from 'react'

const RowSelectionTableCheckbox: React.FC = forwardRef<HTMLInputElement, any>( ({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef<any>( null )
  const resolvedRef: any = ref || defaultRef

  useEffect( () => {
    resolvedRef.current.indeterminate = indeterminate
  }, [ resolvedRef, indeterminate ] )

  return (
    <input ref={resolvedRef} type='checkbox' {...rest}/>
  )
} )

export default RowSelectionTableCheckbox
