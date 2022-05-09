import React from 'react'
import style from './PanelHeader.module.scss'
// import Img from '../../../assets/img/Logo.svg'
import { ReactComponent as Logo } from '../../../assets/img/Logo.svg'

export const PanelHeader: React.FC = () => (
  <div className={style.PanelHeader}>
    <Logo/>
    <a className='_icon-menu' href=''/>
  </div>
)