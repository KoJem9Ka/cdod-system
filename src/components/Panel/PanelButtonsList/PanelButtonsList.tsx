import React from 'react'
import { PanelButton } from './PanelButton/PanelButton'
import style from './PanelButtonsList.module.scss'
import { CRoutesTest } from '../PanelConfig'

type TPanelButtonItem = {
  name: string
  route: string
}

export const PanelButtonsList: React.FC = () => (
  <div className={style.PanelButtonsList}>
    {CRoutesTest.map( routeItem => (
      <PanelButton key={routeItem.route} {...routeItem}/>
    ) )}
  </div>
)
