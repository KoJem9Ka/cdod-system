import React, { useState } from 'react'
import { PanelButton } from './PanelButton/PanelButton'
import style from './PanelButtonsList.module.scss'

type TPanelButtonItem = {
  name: string
  route: string
}

export const PanelButtonsList: React.FC = () => {
  const [ routes, setRoutes ] = useState<TPanelButtonItem[]>([
    { route:'students', name:'Ученики' },
    { route:'schedule', name:'Расписание' },
    { route:'courses', name:'Курсы' },
    { route:'groups', name:'Группы' },
    { route:'ads', name:'Объявления' },
    { route:'teachers', name:'Преподаватели' },
    { route:'payment', name:'Оплата' }
  ])

  return (
    <div className={style.PanelButtonsList}>
      {routes.map(element => <PanelButton key={element.route} name={element.name} route={element.route} />)}
    </div>
  )
}