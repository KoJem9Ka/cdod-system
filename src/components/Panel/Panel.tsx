import React from 'react'
import { PanelHeader } from './PanelHeader/PanelHeader'
import { PanelButtonsList } from './PanelButtonsList/PanelButtonsList'
import style from './Panel.module.scss'
import { LayoutGroup, motion } from 'framer-motion'

//TODO: По всей панели настроить usePanelOpening()
const Panel: React.FC = () => (
  <LayoutGroup>
    <motion.div className={style.Panel} layout>
      <PanelHeader/>
      <PanelButtonsList/>
      {/*<PanelFooter/>*/}
    </motion.div>
  </LayoutGroup>
)

export default Panel
