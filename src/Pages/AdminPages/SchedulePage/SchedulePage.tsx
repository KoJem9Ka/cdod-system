import React, {
  useEffect,
  useRef,
  useState
}                  from 'react'
import bcrypt      from 'bcryptjs'
import styled      from 'styled-components'
import { isNil }   from 'lodash'
import Workspace   from '../../../HOC/Workspace/Workspace'
import { soundex } from '../../../other/soundex'



const SchedulePage: React.FC = () => {
  const [ hash, setHash ] = useState( '' )
  const hashRef = useRef<HTMLInputElement>( null )
  const [ pass, setPass ] = useState( '' )
  const passRef = useRef<HTMLInputElement>( null )
  const [ passHashCheck, setPassHashCheck ] = useState<boolean | null>( null )
  const passChangeHandler = async ( value: string ) => {
    const newHash = await bcrypt.hash( value, 5 )
    setPass( value )
    setHash( newHash )
  }
  const passHashCheckHandler = async () => {
    if ( !hashRef.current || !passRef.current ) return
    setPassHashCheck( await bcrypt.compare( passRef.current.value, hashRef.current.value ) )
  }

  const [ text1, setText1 ] = useState( '' )
  const [ t1dex, setT1Dex ] = useState( '' )
  const [ text2, setText2 ] = useState( '' )
  const [ t2dex, setT2Dex ] = useState( '' )
  const [ searchCheck, setSearchCheck ] = useState<boolean | null>( null )

  useEffect( () => {
    const soundex1 = soundex( text1 )
    const soundex2 = soundex( text2 )
    soundex1 && setT1Dex( soundex1 )
    soundex2 && setT2Dex( soundex2 )
  }, [ text1, text2 ] )

  return (
    <Workspace>
      <Wrapper>
        <h1>Hash: {hash.length}</h1>
        <span>{hash}</span>
        <br/>
        <input value={pass} onChange={async e => passChangeHandler( e.currentTarget.value )}/>
        { !isNil( passHashCheck ) && <p>Check: {passHashCheck ? 'OK' : 'CANCELED'}</p>}
        <input
          ref={hashRef}
          placeholder='hash'
          type='text'
          onKeyUp={passHashCheckHandler}
        />
        <input
          ref={passRef}
          placeholder='pass'
          type='text'
          onKeyUp={passHashCheckHandler}
        />


        <p>Check: {searchCheck ? 'FOUND' : 'no match'}</p>
        <p>{t1dex}, {t2dex}</p>
        <input
          placeholder='Текст 1'
          type='text'
          value={text1}
          onChange={e => setText1( e.currentTarget.value )}
        />
        <input
          placeholder='Текст 2'
          type='text'
          value={text2}
          onChange={e => setText2( e.currentTarget.value )}
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