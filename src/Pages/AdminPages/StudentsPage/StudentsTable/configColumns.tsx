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
  parseContractState,
  strJoinSpace
}                            from '../../../../other/helpers'
import { soundex }           from '../../../../other/soundex'
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
    accessorFn:         ( { birthDate } ) => birthDate && `${birthDate} (${humanizeDate( birthDate, 'floor' )})`,
    accessorKey:        'birthDate',
    enableColumnFilter: false,
  },
  {
    header:             'Заметки',
    accessorKey:        'description',
    enableColumnFilter: false,
  },
  {
    id:                 'parentFio',
    header:             'Родитель',
    accessorFn:         row => strJoinSpace( row.parent.lastName, row.parent.firstName, row.parent.patronymic ),
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
    id:                 'email',
    header:             'Почта',
    accessorFn:         row => row.parent.email || row.parent.secondEmail,
    enableColumnFilter: false,
  },
  {
    id:                 'studies',
    header:             'Обучение',
    enableSorting:      false,
    cell:               ColumnStudies,
    accessorFn:         ( { info } ) => info.map( study => [ study.admissionDate, study.course.name, study.contractState ] ),
    enableGlobalFilter: true,
    enableColumnFilter: true,
    filterFn:           ( { original: { info } }, columnId, filterValue, addMeta ) => true,
  },
  {
    header:             'Оплата',
    cell:               ColumnPaid,
    enableColumnFilter: true,
  },
  {
    header:             'Первое обращение',
    accessorKey:        'parent.applyingDate',
    accessorFn:         ( { parent: { applyingDate } } ) => `${applyingDate} (${humanizeDate( applyingDate )})`,
    enableColumnFilter: false,
  }
]


export const studentsGlobalFilterFn: FilterFnOption<T> = (
  { original: { lastName, firstName, patronymic, birthDate, description, info, parent } },
  columnId,
  filterValue: string,
  addMeta
) => {
  const studiesSt = new Set<string>()
  info.forEach( study => {
    studiesSt.add( study.course.name )
    studiesSt.add( study.admissionDate )
    studiesSt.add( parseContractState( study.contractState ) )
  } )
  return filterValue
      .replace( /\s+/g, ' ' )
      .trim()
      .toLowerCase()
      .split( ' ' )
      .every( filter => {
        const soundexFilter = soundex( filter )
        return (
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
            parent.applyingDate,
            ...Array.from( studiesSt )
          ].some( field => {
            const fieldSafe = !isNil( field ) && field.replace( /\s+/g, ' ' ).trim().toLowerCase()
            return fieldSafe && (
              fieldSafe.toLowerCase().includes( filter )
              ||
              // soundexFilter && soundex( fieldSafe )?.includes( soundexFilter )
              soundexFilter && fieldSafe.split( ' ' ).some( subField => soundex( subField ) === soundexFilter )
            )
          }
          // return !isNil( field ) && !isEmpty( field ) && field.toLowerCase().includes( filter )
          )
        )
      } )
}