import React from 'react'
import { useGridTableContext } from '../GridTable'
import { GridDataCell, GridNotFound } from '../GridTableItSelf'

const GridTable_Body: React.FC = () => {
  const {
    columnsConfig,
    dataFinal,
    globalSearchInfo: {
      search,
    },
  } = useGridTableContext()

  return (
    <>
      {!dataFinal.length
        ? <GridNotFound columnsCount={columnsConfig.length}>{search ? 'Ничего не найдено' : 'Нет данных'}</GridNotFound>
        : dataFinal.map( row => columnsConfig.map( col => (
          <GridDataCell key={col.title}>{row[col.connector] as never}</GridDataCell>
        ) ) )}
    </>
  )
}

export default GridTable_Body
