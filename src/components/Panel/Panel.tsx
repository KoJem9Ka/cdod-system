import React from 'react'
import { PanelHeader } from './PanelHeader/PanelHeader'
import { PanelButtonsList } from './PanelButtonsList/PanelButtonsList'
import style from './Panel.module.scss'
import { motion } from 'framer-motion'

const Panel: React.FC = () => (
  <motion.div className={style.Panel} layout>
    <PanelHeader/>
    <PanelButtonsList/>
    {/*<PanelFooter/>*/}
  </motion.div>
)

export default Panel
