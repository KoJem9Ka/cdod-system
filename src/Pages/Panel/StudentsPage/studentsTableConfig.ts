import { TStudent } from '../../../store/students/types'
import { TTableColumnsConfig } from '../../../components/Tables/GridTable/types'

export type TStudentTable = Omit<TStudent, 'last_name' | 'first_name' | 'patronymic'> & {
  FIO: string
}

export const CStudentTable: TTableColumnsConfig<TStudentTable> = [
  {
    title     : 'id',
    connector : 'id',
    minContent: true,
    textAlign : 'center',
    sortable  : true,
  },
  {
    title     : 'ФИО',
    connector : 'FIO',
    minContent: true,
    textAlign : 'center',
    sortable  : true,
  },
  {
    title     : 'Дата рождения',
    connector : 'birth_date',
    minContent: true,
    textAlign : 'center',
    sortable  : true,
  },
  {
    title     : 'Курс',
    connector : 'course',
    textAlign : 'center',
    selectable: true,
  },
  {
    title     : 'Группа',
    connector : 'group',
    textAlign : 'center',
    selectable: true,
  },
  {
    title    : 'Телефон',
    connector: 'phone_number',
    textAlign: 'center',
    sortable : true,
  },
  {
    title     : 'Заметки',
    connector : 'notes',
    textIndent: '1rem',
    sortable  : true,
    minWidth  : 350,
    maxWidth  : 450,
  },
  {
    title    : 'Оплата курса',
    connector: 'paid',
    textAlign: 'center',
    // sortable  : true,
    // selectable: true,
  },
  {
    title    : 'Оплата материалов',
    connector: 'materials_paid',
    textAlign: 'center',
    // sortable  : true,
    // selectable: true,
  },
  {
    title    : 'Дата обращения',
    connector: 'request_date',
    textAlign: 'center',
    sortable : true,
  },
  {
    title     : 'Статус договора',
    connector : 'contract_status',
    textAlign : 'center',
    sortable  : true,
    selectable: true,
    // minContent: true,
  }
]
