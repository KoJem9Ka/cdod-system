import React, {
  useRef,
  useState
}                from 'react'
import bcrypt    from 'bcryptjs'
import styled    from 'styled-components'
import { isNil } from 'lodash'
import Workspace from '../../../HOC/Workspace/Workspace'



const SchedulePage: React.FC = () => {
  const [ text, setText ] = useState( '' )
  const [ hash, setHash ] = useState( '' )

  const hashRef = useRef<HTMLInputElement>( null )
  const textRef = useRef<HTMLInputElement>( null )
  const [ checking, setChecking ] = useState<boolean | null>( null )

  const changeHandler = async ( value: string ) => {
    const newHash = await bcrypt.hash( value, 5 )
    setText( value )
    setHash( newHash )
  }

  const checkHandler = async () => {
    if ( !hashRef.current || !textRef.current ) return
    setChecking( await bcrypt.compare( textRef.current.value, hashRef.current.value ) )
  }

  return (
    <Workspace>
      <Wrapper>
        <h1>Hash: { hash.length }</h1>
        <span>{ hash }</span>
        <br/>
        <input value={ text } onChange={ async e => changeHandler( e.currentTarget.value ) }/>
        { !isNil( checking ) && <p>Check: { checking ? 'OK' : 'CANCELED' }</p> }
        <input
          ref={ hashRef }
          placeholder='hash'
          type='text'
          onKeyUp={ checkHandler }
        />
        <input
          ref={ textRef }
          placeholder='pass'
          type='text'
          onKeyUp={ checkHandler }
        />
      </Wrapper>
    </Workspace>
  )
}

export default SchedulePage

const Wrapper = styled.div`
  display        : flex;
  flex-grow      : 1;
  flex-direction : column;
  gap            : 1rem;

  input {
    color      : white;
    background : black;
    padding    : 1rem;
    font-size  : 2rem;
    width      : 100%;
  }
`