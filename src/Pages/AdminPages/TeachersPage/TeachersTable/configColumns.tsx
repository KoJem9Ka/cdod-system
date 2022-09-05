import { ColumnDef } from '@tanstack/react-table'

import { formatPhone, humanizeDate, strJoinSpace } from '../../../../other/helpers'
import {GTeachersQuery} from '../../../../other/generated';

type T = GTeachersQuery['teachers'][number]

export const columns: ColumnDef<T, any>[] = [
  {
    id: 'fio',
    header: 'Фио',
    accessorFn: row => strJoinSpace(row.lastName, row.firstName, row.patronymic),
    enableHiding: false,
  },
  {
    id: 'birthday',
    header: 'Возраст',
    accessorKey: 'birthday',
    accessorFn: ({ birthday }) => birthday && `${birthday} (${humanizeDate(birthday, 'floor')})`,
  },
  {
    id: 'email',
    header: 'email',
    accessorFn: row => row.email,
  },
  {
    id: 'phoneNumber',
    header: 'Телефон',
    accessorFn: ({ phoneNumber }) => phoneNumber && formatPhone(phoneNumber),
  },
  {
    id: 'post',
    header: 'Должность',
    accessorFn: row => row.post,
  },
  {
    id: 'workPlace',
    header: 'Кабинет',
    accessorFn: row => row.workPlace,
  }
]