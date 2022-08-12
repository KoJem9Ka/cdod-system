import React           from 'react'
import styles          from './UserLayoutWithPanel.module.scss'
import Panel           from '../../components/Panel/Panel'
import { Outlet }      from 'react-router-dom'
import CheckAuth       from '../../HOC/CheckAuth/CheckAuth'
import { LayoutGroup } from 'framer-motion'



const UserLayoutWithPanel: React.FC = () => (
  <LayoutGroup>
    <CheckAuth>
      <div className={ styles.BasicLayout }>
        <Panel/>
        <Outlet/>
      </div>
    </CheckAuth>
  </LayoutGroup>
)

export default UserLayoutWithPanel
