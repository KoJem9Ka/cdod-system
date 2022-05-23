import React from 'react'
import { format } from 'date-fns'
import { Column } from 'react-table'
import { TStudent } from '../../../store/students/types'

type customColumn<D extends object> = {
  sticky?: 'left'
} & Column<D>

// export const CStickyColumns: readonly customColumn<TStudent>[] = [
//   {
//     Header: '№',
//     Footer: '№',
//     accessor: 'id',
//     sticky: 'left',
//   },
//   {
//     Header: 'Ученик',
//     Footer: 'Ученик',
//     accessor: 'last_name',
//     sticky: 'left',
//   },
//   {
//     Header: 'Возраст',
//     Footer: 'Возраст',
//     accessor: 'birth_date',
//     Cell: ({ value }) => <>{format( new Date( value ), 'dd-MM-yyyy' )}</>,
//   },
//   {
//     Header: 'Курс',
//     Footer: 'Курс',
//     accessor: 'course',
//   },
//   {
//     Header: 'Группа',
//     Footer: 'Группа',
//     accessor: 'group',
//   },
//   {
//     Header: 'Телефон родителя',
//     Footer: 'Телефон родителя',
//     accessor: 'phone_number',
//   },
//   {
//     Header: 'Заметки',
//     Footer: 'Заметки',
//     accessor: 'notes',
//   },
//   {
//     Header: 'Оплата курса',
//     Footer: 'Оплата курса',
//     accessor: 'paid',
//     Cell: ({ value }) => (value ? <>True</> : <>False</>),
//   },
//   {
//     Header: 'Оплата комплекта',
//     Footer: 'Оплата комплекта',
//     accessor: 'materials_paid',
//     Cell: ({ value }) => (
//       value ? <>True</> :
//         !value ? <>False</> :
//           <></>
//     ),
//   },
//   {
//     Header: 'Дата обращения',
//     Footer: 'Дата обращения',
//     accessor: 'request_date',
//   },
//   {
//     Header: 'Статус договора',
//     Footer: 'Статус договора',
//     accessor: 'contract_status',
//   }
// ]

export const CColumns: Column<TStudent>[] = [
  {
    Header             : '№',
    Footer             : '№',
    accessor           : 'id',
    disableFilters     : true,
    disableGlobalFilter: true,
  },
  {
    Header        : 'Ученик',
    Footer        : 'Ученик',
    accessor      : 'patronymic',
    disableFilters: true,
  },
  {
    Header  : 'Возраст',
    Footer  : 'Возраст',
    accessor: 'birth_date',
    Cell    : ({ value }) => <>{format( new Date( value ), 'dd-MM-yyyy' )}</>,
  },
  {
    Header  : 'Курс',
    Footer  : 'Курс',
    accessor: 'course',
  },
  {
    Header  : 'Группа',
    Footer  : 'Группа',
    accessor: 'group',
  },
  {
    Header  : 'Телефон родителя',
    Footer  : 'Телефон родителя',
    accessor: 'phone_number',
  },
  {
    Header  : 'Заметки',
    Footer  : 'Заметки',
    accessor: 'notes',
  }
// {
//   Header: 'Оплата курса',
//   Footer: 'Оплата курса',
//   accessor: 'paid',
//   Cell: ({ value }) => (value ? <>True</> : <>False</>),
// },
// {
//   Header: 'Оплата комплекта',
//   Footer: 'Оплата комплекта',
//   accessor: 'materials_paid',
//   Cell: ({ value }) => (
//     value === true ? <>True</> :
//       value === false ? <>False</> :
//         <></>
//   ),
// },
// {
//   Header: 'Дата обращения',
//   Footer: 'Дата обращения',
//   accessor: 'request_date',
// },
// {
//   Header: 'Статус договора',
//   Footer: 'Статус договора',
//   accessor: 'contract_status',
// }
]

// export const CGroupedColumns = [
//   {
//     Header: '№',
//     Footer: '№',
//     accessor: 'id',
//   },
//   {
//     Header: 'Ученик',
//     Footer: 'Ученик',
//     columns: [
//       {
//         Header: 'Фамилия',
//         Footer: 'Фамилия',
//         accessor: 'last_name',
//       },
//       {
//         Header: 'Имя',
//         Footer: 'Имя',
//         accessor: 'first_name',
//       },
//       {
//         Header: 'Отчество',
//         Footer: 'Отчество',
//         accessor: 'third_name',
//       }
//     ],
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Возраст',
//         Footer: 'Возраст',
//         accessor: 'birth_date',
//       },
//       {
//         Header: 'Курс',
//         Footer: 'Курс',
//         accessor: 'course',
//       },
//       {
//         Header: 'Группа',
//         Footer: 'Группа',
//         accessor: 'group',
//       },
//       {
//         Header: 'Телефон родителя',
//         Footer: 'Телефон родителя',
//         accessor: 'phone_number',
//       },
//       {
//         Header: 'Заметки',
//         Footer: 'Заметки',
//         accessor: 'notes',
//       },
//       {
//         Header: 'Оплата курса',
//         Footer: 'Оплата курса',
//         accessor: 'paid',
//       },
//       {
//         Header: 'Оплата комплекта',
//         Footer: 'Оплата комплекта',
//         accessor: 'materials_paid',
//       },
//       {
//         Header: 'Дата обращения',
//         Footer: 'Дата обращения',
//         accessor: 'request_date',
//       },
//       {
//         Header: 'Статус договора',
//         Footer: 'Статус договора',
//         accessor: 'contract_status',
//       }
//     ],
//   }
// ] as const

