import React               from 'react'
import { DataGrid }        from 'devextreme-react'
import { Column }          from 'devextreme-react/data-grid'
import classes             from '../../../../styles/TablesStyles.module.scss'
import { GridBaseOptions } from 'devextreme/ui/data_grid'
import { GGroupsQuery }    from '../../../../other/generated'



type T = GGroupsQuery['groups'][number]

type Props = {
  data: T[]
  onRowSelected: ( id: T['id'] )=> void
}

const GroupsTable: React.FC<Props> = ( { data, onRowSelected } ) => {
  const handler: GridBaseOptions<any>['onSelectionChanged'] = ( { selectedRowKeys } ) => {
    onRowSelected( selectedRowKeys[0] )
  }

  if ( data.length === 0 )
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
        calculateCellValue={ ( row: T ) => row.course.name }
        caption={ 'Курс' }
      />
      <Column
        caption={ 'Группа' }
        dataField={ 'name' }
      />
      <Column
        calculateCellValue={ ( row: T ) => `${ row.teacher.lastName } ${ row.teacher.firstName } ${ row.teacher.patronymic }` }
        caption={ 'Преподаватель' }
        dataField={ 'teacher' }
      />
      <Column
        caption={ 'Дата начала' }
        dataField={ 'startDate' }
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
