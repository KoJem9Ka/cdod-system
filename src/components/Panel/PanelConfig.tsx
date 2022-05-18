import React from 'react'
import StudentsPage from '../../Pages/Panel/StudentsPage/StudentsPage'
import TeachersPage from '../../Pages/Panel/TeachersPage/TeachersPage'
import PaymentPage from '../../Pages/Panel/PaymentPage/PaymentPage'
import CoursesPage from '../../Pages/Panel/CoursesPage/CoursesPage'
import SchedulePage from '../../Pages/Panel/SchedulePage/SchedulePage'
import GroupsPage from '../../Pages/Panel/GroupsPage/GroupsPage'
import NotificationsPage from '../../Pages/Panel/NotificationsPage/NotificationsPage'

export const CRoutesTest = [
  { element: (<StudentsPage/>), route: 'students', title: 'Ученики' },
  { element: (<SchedulePage/>), route: 'schedule', title: 'Расписание' },
  { element: (<GroupsPage/>), route: 'groups', title: 'Группы' },
  { element: (<CoursesPage/>), route: 'courses', title: 'Курсы' },
  { element: (<NotificationsPage/>), route: 'notifications', title: 'Объявления' },
  { element: (<TeachersPage/>), route: 'teachers', title: 'Преподаватели' },
  { element: (<PaymentPage/>), route: 'payment', title: 'Оплата' }
] as const

export type TCRoutes = typeof CRoutesTest[number]['route']
