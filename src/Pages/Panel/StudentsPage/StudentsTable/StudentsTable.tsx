import {
  Column,
  ColumnChooser,
  DataGrid,
  FilterRow,
  Pager,
  SearchPanel,
  Summary,
  TotalItem
} from 'devextreme-react/data-grid'
import React               from 'react'
import Paid                from './Paid'
import classes             from '../../../../styles/TablesStyles.module.scss'
import { TStudent }        from '../../../../types'
import { GridBaseOptions } from 'devextreme/ui/data_grid'



type T = TStudent

type Props = {
  data: T[]
  onRowSelected: ( id: T['id'] )=> void
}

type selectEvent = GridBaseOptions<any>['onSelectionChanged']

const StudentsTable: React.FC<Props> = ( { data, onRowSelected } ) => {
  const handler: selectEvent = ( { selectedRowKeys } ) => {
    onRowSelected( selectedRowKeys[0] )
  }

  if (data.length === 0)
    return <h2>Нет данных</h2>

  return (
    <DataGrid
      allowColumnReordering={ true }
      allowColumnResizing={ true }
      cellHintEnabled={ true }
      className={ classes.grid }
      columnAutoWidth={ true }
      columnFixing={ { enabled: true, texts: { fix: 'Закрепить', unfix: 'Открепить', leftPosition: 'Слева', rightPosition: 'Спрева' } } }

      columnHidingEnabled={ true }

      columnMinWidth={ 100 }
      columnResizingMode='widget'
      dataSource={ data }
      defaultPaging={ { enabled: true, pageSize: 50 } }

      // focusedRowEnabled={ true }
      hoverStateEnabled={ true }
      keyExpr='id'
      // errorRowEnabled={ true }

      // grouping={ { autoExpandAll: false, expandMode: 'rowClick' } }

      repaintChangesOnly={ true}
      scrolling={ { mode: 'virtual', rowRenderingMode: 'virtual', scrollByContent: true } }
      // renderAsync={ true }

      selection={ { mode: 'single' } }
      showColumnLines={ true }
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
        alignment='right'
        allowFiltering={ true }

        allowHiding={ false }
        // allowGrouping={ false }
        allowSearch={ true }
        allowSorting={ true }
        calculateCellValue={ ( row: T ) => `${ row.last_name } ${ row.first_name } ${ row.patronymic }` }
        caption='ФИО'
        dataType={ 'string' }
        name='fio'
        // fixed={ true }
      />
      <Column
        alignment='center'
        caption='ДР'
        dataField='birth_date'
        dataType='date'
      />
      <Column
        caption='Курс'
        dataField='course'
      />
      <Column
        caption='Группа'
        dataField='group'
      />
      <Column
        caption='Телефон'
        dataField='phone_number'
      />
      <Column
        caption='Заметки'
        dataField='notes'
        width={ 200 }
      />
      <Column
        caption='Оплата'
        cellRender={ Paid }
        dataField='paid'
        dataType='boolean'
        falseText={ 'Долг' }
        trueText={ 'Оплачено' }
      />
      <Column
        caption='Материалы'
        cellRender={ Paid }
        dataField='materials_paid'
        dataType='boolean'
        falseText={ 'Долг' }
        trueText={ 'Оплачено' }
      />
      <Column
        alignment='center'
        caption='Дата заявки'
        dataField='request_date'
        dataType='date'
        sortOrder='desc'
      />
      <Column
        alignment='center'
        caption='Статус'
        dataField='contract_status'
      />

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

      <Summary>
        <TotalItem

          summaryType='count'
        />
      </Summary>
    </DataGrid>
  )
}


export default StudentsTable
