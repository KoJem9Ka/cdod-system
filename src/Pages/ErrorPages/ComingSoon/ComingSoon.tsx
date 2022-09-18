import React from 'react'
import style from '../ErrorPages.module.scss'
import { ReactComponent as Robot } from '../../../assets/img/Robot404.svg'

const ComingSoon: React.FC = () => (
  <div className={ style.ErrorPage }>
    <Robot/>
    <h1>Coming soon...😣</h1>
  </div>
)

export default ComingSoon