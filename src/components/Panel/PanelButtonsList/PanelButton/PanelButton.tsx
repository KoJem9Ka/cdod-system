import React from 'react'
import style from './PanelButton.module.scss'
import { NavLink, NavLinkProps } from 'react-router-dom'

const setActive: NavLinkProps['className'] = ({ isActive }) => (isActive ? `${style.active} ${style.PanelButton}` : style.PanelButton)

type PanelButtonProps = {
  name: string
  route: string
}

export const PanelButton: React.FC<PanelButtonProps> = ({ name, route }) => (
  <>
    <NavLink className={setActive} to={`/${route}`}>
      <i className={`_icon-${route}`} />
      <span>{name}</span>
    </NavLink>
  </>
)