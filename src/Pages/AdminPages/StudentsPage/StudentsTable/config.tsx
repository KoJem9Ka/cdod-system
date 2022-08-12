import {
  ColumnDef,
  FilterFnOption
}                            from '@tanstack/react-table'
import ColumnPaid            from './columns/ColumnPaid'
import ColumnStudies         from './columns/ColumnStudies'
import { GAllStudentsQuery } from '../../../../other/generated'
import {
  formatPhone,
  humanizeDate,
  strJoinSpace
}                            from '../../../../other/helpers'
import { isNil }             from 'lodash'



export type T = GAllStudentsQuery['students'][number]

// declare module '@tanstack/table-core' {
//   interface FilterFns {
//     fuzzy: FilterFn<unknown>;
//   }
//   // interface FilterMeta {
//   //   itemRank: RankingInfo;
//   // }
// }

export const columns: ColumnDef<T, any>[] = [
  {
    id:                 'fio',
    header:             'ФИО',
    accessorFn:         row => strJoinSpace( row.lastName, row.firstName, row.patronymic ),
    enableColumnFilter: false,
    enableHiding:       false,
  },
  {
    header:             'Возраст',
    accessorFn:         ( { birthDate } ) => birthDate && `${ birthDate } (${ humanizeDate( birthDate, 'floor' ) })`,
    accessorKey:        'birthDate',
    enableColumnFilter: false,
  },
  {
    header:             'Заметки',
    accessorKey:        'description',
    enableColumnFilter: false,
  },
  {
    header:     'Телефон',
    accessorFn: ( { parent: { phoneNumber, secondPhoneNumber } } ) => {
      const phone = phoneNumber || secondPhoneNumber
      return phone && formatPhone( phone )
    },
  },
  {
    id:                 'studies',
    header:             'Обучение',
    enableSorting:      false,
    cell:               ColumnStudies,
    accessorFn:         ( { info } ) => info.map( study => [ study.admissionDate, study.course.name, study.contractState ] ),
    enableGlobalFilter: true,
    enableColumnFilter: true,
    filterFn:           ( { original: { info } }, columnId, filterValue, addMeta ) => info.some( study => study.contractState === filterValue ),
  },
  {
    header:             'Оплата',
    cell:               ColumnPaid,
    enableColumnFilter: true,
  },
  {
    header:             'Первое обращение',
    accessorKey:        'parent.applyingDate',
    accessorFn:         ( { parent: { applyingDate } } ) => `${ applyingDate } (${ humanizeDate( applyingDate ) })`,
    enableColumnFilter: false,
  }
]


export const studentsGlobalFilterFn: FilterFnOption<T> = (
  { original: { lastName, firstName, patronymic, birthDate, description, info, parent } },
  columnId,
  filterValue: string,
  addMeta
) => filterValue.toLowerCase().replace( /\s+/g, ' ' ).trim().split( ' ' ).every( value => (
  [
    lastName,
    firstName,
    patronymic,
    birthDate,
    description,
    parent.lastName,
    parent.firstName,
    parent.patronymic,
    parent.phoneNumber,
    parent.secondPhoneNumber,
    parent.email,
    parent.secondEmail,
    parent.applyingDate
  ].some( val => !isNil( val ) && val.toLowerCase().includes( value ) )
  ||
  info.some( study => study.course.name.toLowerCase().includes( value ) || study.admissionDate.includes( value ) )
) )