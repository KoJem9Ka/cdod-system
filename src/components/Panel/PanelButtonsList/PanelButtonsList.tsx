import React from 'react'
import { PanelButton } from './PanelButton/PanelButton'
import style from './PanelButtonsList.module.scss'

export const PanelButtonsList: React.FC = () => (
  <div className={style.PanelButtonsList}>
        PanelButtonsList of:
    <PanelButton/>
  </div>
)