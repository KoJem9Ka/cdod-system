import React from 'react'
import styles from '../../GridTable.module.scss'
import { useGridTableContext } from '../../GridTable'


const GlobalSearchControls: React.FC = () => {
  const {
    globalSearchInfo: {
      search,
      setSearch,
    },
  } = useGridTableContext()

  return (
    <div className={styles.search}>
      Поиск:&nbsp;
      <input type='text' value={search} onChange={e => setSearch( e.currentTarget.value )}/>
    </div>
  )
}

export default GlobalSearchControls
