import React from 'react'
import style from './PanelButton.module.scss'
import { NavLink, NavLinkProps } from 'react-router-dom'

type PanelButtonProps = {
  title: string
  route: string
}

export const PanelButton: React.FC<PanelButtonProps> = ({ title, route }) => {
  const activeClassHandler: NavLinkProps['className'] = ({ isActive }) => [
    style.PanelButton,
    isActive && style.active
  ].join( ' ' )

  return (
    <NavLink className={activeClassHandler} to={`/${route}`}>
      <i className={`_icon-${route}`}/>
      <span>{title}</span>
    </NavLink>
  )
}
