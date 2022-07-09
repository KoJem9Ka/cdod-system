import {
  Column,
  ColumnChooser,
  DataGrid,
  FilterRow,
  GroupItem,
  GroupPanel,
  SearchPanel,
  Summary
}                   from 'devextreme-react/data-grid'
import React        from 'react'
import Paid         from './Paid'
import classes      from './Styles.module.scss'
import { TStudent } from '../../../../types'



type T = TStudent

type Props = {
  data: T[]
  onRowSelected: ( id: T['id'] )=> void
}

const StudentsTable: React.FC<Props> = ( { data, onRowSelected } ) => (
  <DataGrid
    allowColumnReordering={ true }
    allowColumnResizing={ true }
    cellHintEnabled={ true }
    className={ classes.grid }

    columnAutoWidth={ true }
    columnFixing={ { enabled: true, texts: { fix: 'Закрепить', unfix: 'Открепить', leftPosition: 'Слева', rightPosition: 'Спрева' } } }

    columnMinWidth={ 100 }

    columnResizingMode='widget'
    dataSource={ data }
    errorRowEnabled={ true }
    focusedRowEnabled={ true }

    grouping={ { autoExpandAll: false, expandMode: 'rowClick' } }

    hoverStateEnabled={ true }
    keyExpr='id'

    scrolling={ { mode: 'virtual', renderAsync: true } }

    // wordWrapEnabled={ true}

    // pager={ {
    //   // displayMode:      'compact',
    //   visible:          true,
    //   allowedPageSizes: [ 10, 25, 50, 0 ],
    //   // showInfo:         true,
    //   // infoText: '(Всего строк {2})'
    //   showNavigationButtons: true,
    //   showPageSizeSelector:  true,
    // } }
    onFocusedRowKeyChange={ onRowSelected }
  >
    <Column
      alignment='right'

      allowFiltering={ true }
      allowGrouping={ false }
      allowHiding={ false }
      allowSearch={ true }
      allowSorting={ true }
      calculateCellValue={ ( row: T ) => `${ row.last_name } ${ row.first_name } ${ row.patronymic }` }
      caption='ФИО'
      dataType={ 'string' }
      fixed={ true }
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
      falseText={ 'Задолжник' }
      trueText={ 'Оплачено' }
    />
    <Column
      caption='Материалы'
      cellComponent={ Paid }
      dataField='materials_paid'
      dataType='boolean'
      falseText={ 'Задолжник' }
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
    <GroupPanel
      emptyPanelText='Перетащите сюда заголовок столбца, чтобы сгруппировать по этому столбцу'
      visible={ true }
    />
    <FilterRow visible={ true }/>
    <SearchPanel
      placeholder={ 'Поиск' }
      visible={ true }
    />

    <Summary>
      <GroupItem
        summaryType='count'
      />
    </Summary>
  </DataGrid>
)


export default StudentsTable
