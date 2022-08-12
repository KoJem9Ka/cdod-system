import React             from 'react'
import StudentsPage      from '../../Pages/AdminPages/StudentsPage/StudentsPage'
import TeachersPage      from '../../Pages/AdminPages/TeachersPage/TeachersPage'
import PaymentPage       from '../../Pages/AdminPages/PaymentPage/PaymentPage'
import CoursesPage       from '../../Pages/AdminPages/CoursesPage/CoursesPage'
import SchedulePage      from '../../Pages/AdminPages/SchedulePage/SchedulePage'
import GroupsPage        from '../../Pages/AdminPages/GroupsPage/GroupsPage'
import NotificationsPage from '../../Pages/AdminPages/NotificationsPage/NotificationsPage'



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
