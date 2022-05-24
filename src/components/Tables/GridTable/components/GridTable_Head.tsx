/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import React from 'react'
import { useGridTableContext } from '../GridTable'
import { GridHeadCell } from '../GridTableItSelf'

const GridTable_Head: React.FC = () => {
  const {
    columnsConfig,
    columnSortingInfo: {
      sortHandler,
      sortConfig,
    },
    selectionInfo    : {
      selectColumn,
      availableSelections,
    },
  } = useGridTableContext()

  return (
    <>
      {columnsConfig.map( col => (
        <GridHeadCell
          key={col.title}
          sortable={col.sortable}
          onClick={!col.sortable ? undefined : () => sortHandler( col.connector )}
        >
          {col.title}

          {sortConfig && sortConfig.column === col.connector && <span>{sortConfig.ascending ? '🔽' : '🔼'}</span>}

          {col.selectable && (
            <select defaultValue='all' onChange={e => selectColumn( col.connector, e.currentTarget.value )} onClick={e => e.stopPropagation()}>
              <option value='all'>Все</option>
              {availableSelections && availableSelections[col.connector]?.map( value => <option key={value} value={value}>{value}</option> )}
            </select>
          )}
        </GridHeadCell>
      ) )}
    </>
  )
}

export default GridTable_Head
