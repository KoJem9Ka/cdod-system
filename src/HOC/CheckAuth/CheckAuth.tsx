/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols

import React, {
  PropsWithChildren,
  useEffect
}                       from 'react'
import { useNavigate }  from 'react-router-dom'
import { AbsolutePath } from '../../other/PathConfig'
import { isEmpty }      from 'lodash'



const CheckAuth: React.FC<PropsWithChildren> = ( { children } ) => {
  const navigate = useNavigate()
  const noToken  = isEmpty( localStorage.getItem( 'AccessToken' ) )

  useEffect( () => {
    if ( noToken ) {
      navigate( AbsolutePath.Login )
      console.log( 'CheckAuth: no token!' )
    }
  }, [ noToken ] )

  if ( noToken ) return <></>
  else return (
    <>
      {children}
    </>
  )
}

export default CheckAuth
