export {}
// import {
//   Column,
//   ColumnChooser,
//   DataGrid,
//   FilterRow,
//   SearchPanel
// }                          from 'devextreme-react/data-grid'
// import React, { memo }     from 'react'
// import classes             from '../../../../styles/TablesStyles.module.scss'
// import { GridBaseOptions } from 'devextreme/ui/data_grid'
// import StudyInfo           from './StudyInfo'
// import Paid                from './Paid'
// import {
//   isEqual,
//   isNil
// }                          from 'lodash'
// import {
//   formatDate,
//   formatPhone,
//   humanizeDate,
//   strCat
// }                          from '../../../../other/helpers'
// import {
//   GContractState,
//   GStudentsQuery
// }                          from '../../../../other/generated'
//
//
//
// type T = GStudentsQuery['students'][number]
//
// type Props = {
//   data: T[]
//   onRowSelected: ( id: T['id'] )=> void
// }
//
// const StudentsTable: React.FC<Props> = memo( ( { data, onRowSelected } ) => {
//   const handler: GridBaseOptions<any>['onSelectionChanged'] = ( { selectedRowKeys } ) => void onRowSelected( selectedRowKeys[0] )
//
//   if ( data.length === 0 )
//     return <h2>Таблица: Нет данных</h2>
//
//   return (
//     <DataGrid
//       allowColumnReordering={ true }
//       allowColumnResizing={ true }
//       cellHintEnabled={ true }
//       className={ classes.grid }
//       columnAutoWidth={ true }
//       columnFixing={ { enabled: true, texts: { fix: 'Закрепить', unfix: 'Открепить', leftPosition: 'Слева', rightPosition: 'Спрева' } } }
//
//       columnHidingEnabled={ true }
//
//       columnMinWidth={ 50 }
//       columnResizingMode='widget'
//       dataSource={ data }
//       defaultPaging={ { enabled: true, pageSize: 50 } }
//
//       // focusedRowEnabled={ true }
//       headerFilter={ { visible: true } }
//       // errorRowEnabled={ true }
//
//       hoverStateEnabled={ true }
//       // grouping={ { autoExpandAll: false, expandMode: 'rowClick' } }
//
//       // repaintChangesOnly={ true }
//       keyExpr='id'
//       // renderAsync={ true }
//
//       scrolling={ { mode: 'virtual', rowRenderingMode: 'virtual', columnRenderingMode: 'virtual' } }
//       // showColumnLines={ true }
//       // paging={ { enabled: true } }
//
//       selection={ { mode: 'single' } }
//       showRowLines={ true }
//       sorting={ { mode: 'multiple', clearText: 'Отмена сортировки', ascendingText: 'По возрастанию', descendingText: 'По убыванию' } }
//       wordWrapEnabled={ true }
//
//       // onFocusedRowKeyChange={ onRowSelected }
//       pager={ {
//         // displayMode:      'compact',
//         visible:          true,
//         allowedPageSizes: [ 50, 0 ],
//         // showInfo:         true,
//         // infoText: '(Всего строк {2})'
//         showNavigationButtons: true,
//         showPageSizeSelector:  true,
//       } }
//       onSelectionChanged={ handler }
//     >
//       <Column
//         caption='id'
//         dataField='id'
//         dataType={ 'number' }
//         visible={ false }
//       />
//       <Column
//         allowFiltering={ true }
//         // alignment='right'
//         allowHeaderFiltering={ false }
//         allowSearch={ true }
//         allowSorting={ true }
//         calculateCellValue={ ( row: T ) => strCat( row.lastName, row.firstName, row.patronymic ) }
//         caption='ФИО'
//         dataType={ 'string' }
//         name='fio'
//       />
//       <Column
//         alignment='center'
//         allowHeaderFiltering={ true }
//         caption='Возраст'
//         customizeText={ ( { valueText } ) => (!valueText ? '' : strCat( formatDate( valueText ), `(${ humanizeDate( valueText ) })` )) }
//         dataField='birthDate'
//         dataType='date'
//         name='birthDate'
//       />
//       <Column
//         alignment='center'
//         allowHeaderFiltering={ false }
//         calculateCellValue={ ( row: T ) => formatPhone( row.parent.phoneNumber || row.parent.secondPhoneNumber || 'Нет телефона' ) }
//         caption='Контакты'
//         name='contacts'
//       />
//       <Column
//         allowHeaderFiltering={ false }
//         caption='Заметки'
//         dataField='description'
//         width={ 200 }
//       />
//       <Column
//         caption='Обучение'
//         cellComponent={ StudyInfo }
//         dataField='info'
//         // headerFilter={ { dataSource: studyFilter } }
//       />
//       <Column
//         // allowFiltering={ true }
//         allowHeaderFiltering={ false }
//         caption='Оплата'
//         cellRender={ Paid }
//         dataType='boolean'
//         falseText={ 'Долг' }
//         trueText={ 'Оплачено' }
//         width={ 150 }
//         // TODO: Если исключён/отучился, и остался долг?
//         calculateCellValue={ ( row: T ) => row.info.reduce<boolean | null>( ( final, cur ) => {
//           const isStudying = cur.contractState === GContractState.Studying
//           const isPaid = cur.isCoursePaid && (isNil( cur.isEquipmentPaid ) || cur.isEquipmentPaid)
//           return isStudying && final === null
//             ? isPaid
//             : isStudying
//               ? final && isPaid
//               : final
//         }, null ) }
//       />
//       <Column
//         alignment='center'
//         // calculateCellValue={ ( row: T ) => row.parent.applyingDate }
//         allowHeaderFiltering={ false }
//         caption='Дата заявки'
//         // customizeText={ arg => `${ arg.valueText } (${ humanizeDate(arg.valueText) })` }
//         dataField='parent.applyingDate'
//         dataType='date'
//         sortOrder='desc'
//         width={ 200 }
//       />
//       <ColumnChooser
//         allowSearch={ true }
//         emptyPanelText={ 'Перетащите сюда заголовок столбца, чтобы скрыть его' }
//         enabled={ true }
//         height={ 550 }
//         title={ 'Скрытые колонки:' }
//       />
//       {/*<GroupForm*/ }
//       {/*  emptyPanelText='Перетащите сюда заголовок столбца, чтобы сгруппировать по этому столбцу'*/ }
//       {/*  visible={ true }*/ }
//       {/*/>*/ }
//       <FilterRow visible={ true }/>
//       {/*<HeaderFilter visible={ true }/>*/ }
//       {/*<FilterPanel visible={ true }/>*/ }
//       <SearchPanel
//         placeholder={ 'Поиск' }
//         visible={ true }
//       />
//     </DataGrid>
//   )
// }, ( prevProps, nextProps ) => isEqual( prevProps.data, nextProps.data ) )
//
//
// export default StudentsTable
//
// //GContractState
// const studyFilter = [
//   ( ...itemData: any ) => {
//     console.log( itemData )
//     return true
//   },
//   {
//     text:  'Учится',
//     value: [ [ '[].contractState', '=', GContractState.Studying ] ],
//   },
//   {
//     text:  'На рассмотрении',
//     value: [ [ '[].contractState', '=', GContractState.Consideration ] ],
//   },
//   {
//     text:  'Исключён',
//     value: [ [ '[].contractState', '=', GContractState.Excluded ] ],
//   },
//   {
//     text:  'Ушёл',
//     value: [ [ '[].contractState', '=', GContractState.Left ] ],
//   },
//   {
//     text:  'Отклонено',
//     value: [ [ '[].contractState', '=', GContractState.Rejected ] ],
//   },
//   {
//     text:  'Завершил',
//     value: [ [ '[].contractState', '=', GContractState.Completed ] ],
//   }
// ]