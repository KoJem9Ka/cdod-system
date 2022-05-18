import React from 'react'
import { PanelButton } from './PanelButton/PanelButton'
import style from './PanelButtonsList.module.scss'
import { CRoutesTest } from '../PanelConfig'

export const PanelButtonsList: React.FC = () => (
  <div className={style.PanelButtonsList}>
    {CRoutesTest.map( (routeItem, i) => (
      <PanelButton key={routeItem.route} index={i} {...routeItem}/>
    ) )}
  </div>
)
