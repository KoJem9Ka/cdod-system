import React from 'react'
import { DataGrid } from 'devextreme-react'
import { Column } from 'devextreme-react/data-grid'
import { TGroup } from '../../../../types'

type T = TGroup

type Props = {
  data: T[]
  onRowSelected: (id: T['id'])=> void
}

const GroupTable: React.FC<Props> = ({ data, onRowSelected }) => (
  <DataGrid
    dataSource={data}
    focusedRowEnabled={true}
    keyExpr={'id'}
    onFocusedRowKeyChange={onRowSelected}
  >
    <Column
      caption={'Курс'}
      dataField={'course'}
    />
    <Column
      caption={'Группа'}
      dataField={'groupName'}
    />
    <Column
      caption={'Преподаватель'}
      dataField={'teacher'}
    />
    <Column
      caption={'Дата начала'}
      dataField={'dateOfCreation'}
      dataType={'date'}
    />
    <Column
      alignment={'left'}
      caption={'Ученики'}
      dataField={'studentsCount'}
    />
  </DataGrid>
)

export default GroupTable