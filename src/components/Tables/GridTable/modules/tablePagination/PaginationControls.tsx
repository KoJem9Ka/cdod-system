import React from 'react'
import styles from '../../GridTable.module.scss'
import { useGridTableContext } from '../../GridTable'

const PaginationControls: React.FC = () => {
  const {
    paginationInfo: {
      onePageCount,
      currentPage,
      setOnePageCount,
      setCurrentPage,
      lastPage,
      canPreviousPage,
      canNextPage,
    },
  } = useGridTableContext()

  return (
    <div className={styles.pagination}>
      <label htmlFor='rowsPerPage'>
        Строк на странице:&nbsp;
        <select id='rowsPerPage' value={onePageCount} onChange={e => setOnePageCount( +e.currentTarget.value )}>
          {[ 10, 15, 20, 50, 100 ].map( num => (
            <option key={num} value={num}>{num}</option>
          ) )}
        </select>
      </label>

      <label htmlFor='currentPage'>
        Страница&nbsp;
        <input
          id='currentPage'
          max={lastPage}
          min={1}
          style={{ maxWidth: '3rem' }}
          type='number'
          value={currentPage}
          onChange={e => {
            setCurrentPage( +e.currentTarget.value )
            return 10
          }}
        />
        &nbsp;из&nbsp;
        {lastPage}
      </label>
      <div>
        <button disabled={!canPreviousPage} onClick={() => setCurrentPage( 1 )}>{'<<'}</button>
        <button disabled={!canPreviousPage} onClick={() => setCurrentPage( currentPage - 1 )}>{'<'}</button>
        <button disabled={!canNextPage} onClick={() => setCurrentPage( currentPage + 1 )}>{'>'}</button>
        <button disabled={!canNextPage} onClick={() => setCurrentPage( lastPage )}>{'>>'}</button>
      </div>
    </div>
  )
}

export default PaginationControls
