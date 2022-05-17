import React from 'react'
import styles from './UserLayoutWithPanel.module.scss'
import Panel from '../../components/Panel/Panel'
import { Outlet } from 'react-router-dom'
import CheckAuth from '../../HOC/CheckAuth/CheckAuth'

const UserLayoutWithPanel: React.FC = () => (
  <CheckAuth>
    <div className={styles.BasicLayout}>
      <Panel/>
      <Outlet/>
    </div>
  </CheckAuth>
)

export default UserLayoutWithPanel
