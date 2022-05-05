import React from 'react'
import { PanelHeader } from './PanelHeader/PanelHeader'
import { PanelButtonsList } from './PanelButtonsList/PanelButtonsList'
import { PanelFooter } from './PanelFooter/PanelFooter'
import style from './Panel.module.scss'

const Panel: React.FC = () => (
  <div className={style.Panel}>
    <PanelHeader/>
    <PanelButtonsList/>
    <PanelFooter/>
  </div>
)

export default Panel
