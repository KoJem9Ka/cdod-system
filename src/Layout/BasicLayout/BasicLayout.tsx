import React from 'react'
import styles from './BasicLayout.module.scss'
import Panel from '../../components/Panel/Panel'
import { Outlet } from 'react-router-dom'

const BasicLayout: React.FC = () => (
  <div className={styles.BasicLayout}>
    <Panel/>
    <Outlet/>
  </div>
)

export default BasicLayout
