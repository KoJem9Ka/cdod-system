/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols

import React, {
  PropsWithChildren,
  useEffect
}                       from 'react'
import { useNavigate }  from 'react-router-dom'
import { AbsolutePath } from '../../other/PathConfig'
import { isEmpty }      from 'lodash'



type CheckAuthProps = PropsWithChildren<{
  anonymous?: boolean
}>

//TODO: Что то проверку какую то для авторизации сделать
//  Надо будет из хранилища проверять а не через useState
const CheckAuth: React.FC<CheckAuthProps> = ( { children, anonymous = true } ) => {
  const navigate = useNavigate()
  const noToken = isEmpty( localStorage.getItem( 'Authorization' ) )
  const hasToken = !noToken

  useEffect( () => {
    if ( noToken ) {
      navigate( AbsolutePath.Login )
      console.log( 'CheckAuth: no token!' )
    }
  }, [ noToken ] )

  if ( noToken ) return <></>
  else return (
    <>
      { children }
    </>
  )
}

export default CheckAuth
