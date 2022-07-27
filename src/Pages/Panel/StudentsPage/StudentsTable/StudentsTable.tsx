import {
  Column,
  ColumnChooser,
  DataGrid,
  FilterRow,
  SearchPanel
}                          from 'devextreme-react/data-grid'
import React, { memo }     from 'react'
import classes             from '../../../../styles/TablesStyles.module.scss'
import { GridBaseOptions } from 'devextreme/ui/data_grid'
import StudyInfo           from './StudyInfo'
import moment              from 'moment'
import Paid                from './Paid'
import {
  isEqual,
  isNil
}                          from 'lodash'
import {
  formatPhone,
  humanizeDate,
  strCat
}                          from '../../../../other/helpers'
import { GStudentsQuery }  from '../../../../other/generated'



type T = GStudentsQuery['students'][number]

type Props = {
  data: T[]
  onRowSelected: ( id: T['id'] )=> void
}

const StudentsTable: React.FC<Props> = memo( ( { data, onRowSelected } ) => {
  const handler: GridBaseOptions<any>['onSelectionChanged'] = ( { selectedRowKeys } ) => void onRowSelected( selectedRowKeys[0] )

  if ( data.length === 0 )
    return <h2>Таблица: Нет данных</h2>

  return (
    <DataGrid
      allowColumnReordering={ true }
      allowColumnResizing={ true }
      cellHintEnabled={ true }
      className={ classes.grid }
      columnAutoWidth={ true }
      columnFixing={ { enabled: true, texts: { fix: 'Закрепить', unfix: 'Открепить', leftPosition: 'Слева', rightPosition: 'Спрева' } } }

      columnHidingEnabled={ true }

      columnMinWidth={ 50 }
      columnResizingMode='widget'
      dataSource={ data }
      defaultPaging={ { enabled: true, pageSize: 50 } }

      // focusedRowEnabled={ true }
      hoverStateEnabled={ true }
      keyExpr='id'
      // errorRowEnabled={ true }

      // grouping={ { autoExpandAll: false, expandMode: 'rowClick' } }

      // repaintChangesOnly={ true }
      scrolling={ { mode: 'virtual', rowRenderingMode: 'virtual', columnRenderingMode: 'virtual' } }
      // renderAsync={ true }

      selection={ { mode: 'single' } }
      // showColumnLines={ true }
      // paging={ { enabled: true } }

      showRowLines={ true }
      sorting={ { mode: 'multiple', clearText: 'Отмена сортировки', ascendingText: 'По возрастанию', descendingText: 'По убыванию' } }
      wordWrapEnabled={ true }
      pager={ {
        // displayMode:      'compact',
        visible:          true,
        allowedPageSizes: [ 50, 0 ],
        // showInfo:         true,
        // infoText: '(Всего строк {2})'
        showNavigationButtons: true,
        showPageSizeSelector:  true,
      } }

      // onFocusedRowKeyChange={ onRowSelected }
      onSelectionChanged={ handler }
    >
      <Column
        caption='id'
        dataField='id'
        dataType={ 'number' }
        visible={ false }
      />
      <Column
        // alignment='right'
        allowFiltering={ true }
        allowSearch={ true }
        allowSorting={ true }
        calculateCellValue={ ( row: T ) => strCat( row.lastName, row.firstName, row.patronymic ) }
        caption='ФИО'
        dataType={ 'string' }
        name='fio'
      />
      <Column
        alignment='center'
        calculateCellValue={ ( row: T ) => (!row.birthDate ? '' : strCat( row.birthDate, `(${ humanizeDate( row.birthDate ) })` )) }
        caption='Возраст'
        dataField='birthDate'
        name='birthDate'
      />
      <Column
        alignment='center'
        calculateCellValue={ ( row: T ) => formatPhone( row.parent.phoneNumber || row.parent.secondPhoneNumber || 'Нет телефона' ) }
        caption='Контакты'
        name='contacts'
      />
      <Column
        caption='Заметки'
        dataField='description'
        width={ 200 }
      />
      <Column
        caption={ 'Обучение' }
        cellComponent={ StudyInfo }
      />
      <Column
        allowFiltering={ true }
        caption='Оплата'
        cellRender={ Paid }
        dataType='boolean'
        falseText={ 'Долг' }
        trueText={ 'Оплачено' }
        width={ 150 }
        calculateCellValue={ ( row: T ) => (row.info.length === 0 ? null : row.info.reduce<boolean>( (
          previousValue,
          currentValue
        ) => previousValue && currentValue.isCoursePaid && (isNil( currentValue.isEquipmentPaid ) || currentValue.isEquipmentPaid), true )) }
      />
      <Column
        alignment='center'
        calculateCellValue={ ( row: T ) => row.parent.applyingDate }
        caption='Дата заявки'
        customizeText={ arg => `${ arg.valueText } (${ moment( arg.valueText ).fromNow( true ) })` }
        dataField='signDate'
        dataType='date'
        sortOrder='desc'
        width={ 200 }
      />
      {/*<Column*/ }
      {/*  alignment='center'*/ }
      {/*  caption='Статус'*/ }
      {/*  dataField='contract_status'*/ }
      {/*/>*/ }

      <ColumnChooser
        allowSearch={ true }
        emptyPanelText={ 'Перетащите сюда заголовок столбца, чтобы скрыть его' }
        enabled={ true }
        height={ 550 }
        title={ 'Скрытые колонки:' }
      />
      {/*<GroupForm*/ }
      {/*  emptyPanelText='Перетащите сюда заголовок столбца, чтобы сгруппировать по этому столбцу'*/ }
      {/*  visible={ true }*/ }
      {/*/>*/ }
      <FilterRow visible={ true }/>
      <SearchPanel
        placeholder={ 'Поиск' }
        visible={ true }
      />
    </DataGrid>
  )
}, ( prevProps, nextProps ) => isEqual( prevProps.data, nextProps.data ) )


export default StudentsTable
