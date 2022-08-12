import React           from 'react'
import styled          from 'styled-components'
import style           from './PanelFooter.module.scss'
import { Application } from '../../../queries/client'
import Icons           from '../../../assets/icons/Icons'



export const PanelFooter: React.FC = () => {

  const logoutHandler = () => Application.logout()

  return (
    <div className={ style.PanelFooter }>
      <LogoutButton onClick={ logoutHandler }>
        <Icons thumb='signOut' width={ 20 } layout/>
        Выйти
      </LogoutButton>
    </div>
  )
}

const LogoutButton = styled.button`

`