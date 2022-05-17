import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PathLogin } from '../../PathConfig'

type CheckAuthProps = {
  children: React.ReactNode
  anonymous?: boolean
}

const CheckAuth: React.FC<CheckAuthProps> = ({ children, anonymous = false }) => {
  const navigate = useNavigate()
  const [ authed, setAuthed ] = useState<boolean>( true )

  useEffect( () => {
    if (!authed)
      navigate( PathLogin )
  }, [] )

  return (
    <>
      {children}
    </>
  )
}

export default CheckAuth
