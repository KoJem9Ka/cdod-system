import React, { useState } from 'react'
import styled              from 'styled-components'
import Icons               from '../../assets/icons/Icons'
import { Application }     from '../../queries/client'
import { delay }           from 'lodash'



type LoginPageProps = {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ loading, setLoading ] = useState<boolean>( false )

  const disabled = email.length < 3 || !email.includes( '@' ) || password.length < 3 || loading

  const loginHandler = async () => {
    if ( disabled ) return
    setLoading( true )
    await Application
        .login( { email, password } )
        .finally( async () => delay( () => setLoading( false ), 5000 ) )
  }

  return (
    <FullScreenLayout>
      <BoxContainer onKeyDown={ e => e.key === 'Enter' && loginHandler() }>
        <Icons thumb='logoCdodBlack' width={ 300 }/>
        <Input
          placeholder='Почта'
          type='email'
          value={ email }
          onChange={ e => setEmail( e.currentTarget.value ) }
        />
        <Input
          placeholder='Пароль'
          type='password'
          value={ password }
          onChange={ e => setPassword( e.currentTarget.value ) }
        />
        <Button disabled={ disabled } onClick={ loginHandler }>Войти</Button>
      </BoxContainer>
    </FullScreenLayout>
  )
}


export default LoginPage


const FullScreenLayout = styled.div`
  display         : flex;
  justify-content : center;
  align-items     : center;
  width           : 100vw;
  height          : 100vh;
`

const BoxContainer = styled.div`
  background     : var(--COLOR_white);
  padding        : 2rem;
  border-radius  : 1rem;
  display        : flex;
  flex-direction : column;

  & > *:first-child {
    margin-bottom : 2rem;
  }

  & > *:last-child {
    margin-top : 2rem;
  }

  & > input:nth-child(2) {
    margin-bottom : 1rem;
  }
`

const Input = styled.input`
  border        : 3px solid transparent;
  border-bottom : 3px solid var(--COLOR_line-transparent-blue);
  padding       : 0.5rem .75rem;
  transition    : all 300ms ease;
  background    : var(--COLOR_gray-background);
  border-radius : .5rem;
  width         : 100%;

  &:focus {
    border : 3px solid var(--COLOR_line-transparent-blue);
  }
`

const Button = styled.button`
  background    : var(--COLOR_logo);
  color         : var(--COLOR_white);
  padding       : 0.5rem .75rem;
  border-radius : .5rem;
  transition    : all 150ms ease;
  box-shadow    : none;
  font-size     : 1.25rem;
  line-height   : normal;

  &:not(:disabled):hover {
    cursor     : pointer;
    transform  : scale(1.05);
    box-shadow : 0 0 1rem rgba(0, 122, 169, .5);
  }

  &:disabled {
    opacity : 0.5;
  }
`