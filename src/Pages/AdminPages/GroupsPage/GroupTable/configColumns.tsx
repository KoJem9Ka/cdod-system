import { GGroupsQuery } from '../../../../other/generated'
import { ColumnDef } from '@tanstack/react-table'
import { strJoinSpace } from '../../../../other/helpers'


type T = GGroupsQuery['groups'][number]

export const columns: ColumnDef<T, any>[] = [
  {
    id: 'course',
    header: 'Курс',
    accessorFn: row => row.course.name,
  },
  {
    id: 'groupName',
    header: 'Группа',
    accessorFn: row => row.name,
  },
  {
    id: 'teacher',
    header: 'Преподаватель',
    accessorFn: row => strJoinSpace(row.teacher.lastName, row.teacher.firstName?.slice(0, 1) + '.', row.teacher.patronymic?.slice(0, 1) + '.'),
  },
  {
    id: 'startDate',
    header: 'Дата создания',
    accessorFn: row => row.startDate,
  },
  {
    id: 'studentsCount',
    header: 'Ученики',
    accessorFn: row => row.studentsCount,
  }
]