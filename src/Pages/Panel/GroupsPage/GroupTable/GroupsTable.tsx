import React               from 'react'
import { DataGrid }        from 'devextreme-react'
import { Column }          from 'devextreme-react/data-grid'
import { TGroup }          from '../../../../types'
import classes             from '../../../../styles/TablesStyles.module.scss'
import { GridBaseOptions } from 'devextreme/ui/data_grid'



type T = TGroup

type Props = {
  data: T[]
  onRowSelected: ( id: T['id'] )=> void
}

type selectEvent = GridBaseOptions<any>['onSelectionChanged']

const GroupsTable: React.FC<Props> = ( { data, onRowSelected } ) => {
  const handler: selectEvent = ( { selectedRowKeys } ) => {
    onRowSelected( selectedRowKeys[0] )
  }

  if (data.length === 0)
    return <h2>Нет данных</h2>

  return (
    <DataGrid
      className={ classes.grid }
      dataSource={ data }
      defaultPaging={ { enabled: true, pageSize: 50 } }
      keyExpr={ 'id' }
      scrolling={ { mode: 'virtual', rowRenderingMode: 'virtual', scrollByContent: true } }
      selection={ { mode: 'single' } }
      sorting={ { mode: 'multiple' } }
      wordWrapEnabled={ true }
      pager={ {
        visible:               true,
        allowedPageSizes:      [ 50, 0 ],
        showNavigationButtons: true,
        showPageSizeSelector:  true,
      } }
      onSelectionChanged={ handler }
    >
      <Column
        caption={ 'Курс' }
        dataField={ 'course' }
      />
      <Column
        caption={ 'Группа' }
        dataField={ 'groupName' }
      />
      <Column
        caption={ 'Преподаватель' }
        dataField={ 'teacher' }
      />
      <Column
        caption={ 'Дата начала' }
        dataField={ 'dateOfCreation' }
        dataType={ 'date' }
      />
      <Column
        alignment={ 'left' }
        caption={ 'Ученики' }
        dataField={ 'studentsCount' }
      />
    </DataGrid>
  )
}

export default GroupsTable
