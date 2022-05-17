import React from 'react'
import style from './PanelHeader.module.scss'
import { ReactComponent as Logo } from '../../../assets/img/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { PathDefault } from '../../../PathConfig'
import { usePanelOpening } from '../../../store/InsteadOfContext/hook'

export const PanelHeader: React.FC = () => {
  const navigate = useNavigate()
  const { opened, toggleOpened } = usePanelOpening()

  return (
    <div className={style.PanelHeader}>
      {/* TODO: Скрывать иконку при opened === false */}
      <Logo onClick={() => navigate( PathDefault )}/>
      <div className='_icon-menu' onClick={toggleOpened}/>
    </div>
  )
}
