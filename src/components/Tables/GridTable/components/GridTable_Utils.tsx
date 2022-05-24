import React from 'react'
import styles from '../GridTable.module.scss'
import GlobalSearchControls from '../modules/tableGlobalSearch/GlobalSearchControls'
import PaginationControls from '../modules/tablePagination/PaginationControls'
import { useGridTableContext } from '../GridTable'

const GridTable_Utils: React.FC = () => {
  const {
    globalSearch,
    paginatable,
  } = useGridTableContext()

  if (globalSearch || paginatable) return (
    <div className={styles.utils}>
      {globalSearch && <GlobalSearchControls/>}
      {paginatable && <PaginationControls/>}
    </div>
  )

  return <></>
}

export default GridTable_Utils
