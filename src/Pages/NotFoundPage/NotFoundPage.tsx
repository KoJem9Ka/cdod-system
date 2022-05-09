import React from 'react'
import style from './NotFoundPage.module.scss'
import { ReactComponent as Robot } from '../../assets/img/Robot404.svg'

const NotFoundPage: React.FC = () => (
  <div className={style.NotFoundPage}>
    <Robot/>
    <h1>404 Error</h1>
    <h2>Page not found</h2>
  </div>
)

export default NotFoundPage