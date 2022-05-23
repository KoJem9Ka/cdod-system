import React from 'react'
import { TColumnConfig } from './types'
import { tablePagination } from './tablePagination'
import { tableSort } from './tableSort'
import styles from './MyTable.module.scss'
import { tableSearch } from './tableSearch'
import { tableSelector } from './tableSelector'
import styled from 'styled-components'


const linkElement = (tag: string, class_: string): React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> => props => React.createElement( tag, { ...props, className: [ class_, props.className ].join( ' ' ) }, props.children )

const GridHeadCell = linkElement( 'div', 'th' )
// const GridDataCell = linkElement( 'div', 'td' )
const GridDataCell = styled.div.attrs( { className: 'td' } )`
  //max-height: min-content;
`

const GridNotFound = styled.div.attrs( { className: 'td' } )<{ columnsCount: number }>`
  padding     : 10rem;
  grid-column : span ${props => props.columnsCount};
  text-align  : center;
  font-size   : 2rem;
`

type GridTableProps = {
  columns: TableProps<any>['columns']
  scrollable?: true
}

const GridTable = styled.div<GridTableProps>`
  display               : grid;
  overflow-y            : auto;
  overflow-x            : auto;
  grid-template-rows    : min-content;

  //Если scrollable, то таблица должна заполнить свой контейнер
  ${props => props.scrollable && 'flex-grow: 1;'} //TODO: Добавить проверку что видимых элементов меньше количества элементов на страницу
  grid-template-columns : ${props => props.columns.map( col => {
    const min = col.minWidth ? `${col.minWidth}px` : 'auto'
    const max = col.maxWidth ? `${col.maxWidth}px` : 'auto'
    return col.minContent ? 'min-content' :
      col.maxContent ? 'max-content' :
        !(col.minWidth || col.maxWidth) ? 'auto' :
          `minmax(${min}, ${max})`
  } ).join( ' ' )};

  //Применение свойств к столбцам
  ${props => (props.columns.map( (col, i) => `
  & > *:nth-child(${props.columns.length}n + ${i + 1}) { ${[
      col.textAlign && `text-align: ${col.textAlign};`,
      col.textIndent && `text-indent: ${col.textIndent}`
    ].join( ';' )} }` )).join( '' )}
    //отступ
  .th, .td {
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    padding         : 13px 20px;
  }

  .th {
    position    : sticky;
    top         : 0;
    z-index     : 3;
    font-weight : bold;
    text-align  : center;
    background  : var(--COLOR_dark);
    color       : var(--COLOR_white);

    select {
      font-weight : normal;
    }
  }

  //Срань господния и липкие столбцы
  //& > *:nth-child(10n+1) {
  //  position : sticky;
  //  left     : 0;
  //  z-index  : 5;
  //
  //  &.th {
  //    //z-index: 5;
  //  }
  //
  //
  //  &.td {
  //    background-color : yellow;
  //    z-index          : 1;
  //  }
  //}
  //
  //& > *:nth-child(10n+2) {
  //  position : sticky;
  //  left     : 5rem;
  //  z-index  : 4;
  //
  //  &.th {
  //    //z-index: 5;
  //  }
  //
  //
  //  &.td {
  //    background : blue;
  //    z-index    : 0;
  //  }
  //}

  //Отрисовка пунктирных линий между ячейками
  .td:not(:nth-child(${p => p.columns.length}n+1)) {
    position : relative;

    &:after {
      content     : '';
      left        : 0;
      position    : absolute;
      top         : 50%;
      transform   : translateY(-50%);
      height      : calc(100% - 2 * 7px);
      border-left : 1.5px dashed var(--COLOR_gray-pale-punctuated);
    }
  }
`


type TElementExample = {
  id: number | string
}

type TableProps<T extends TElementExample> = {
  columns: readonly (TColumnConfig<T> & { connector: string })[]
  data: T[]
  paginatable?: true
  globalSearch?: true
  scrollable?: true
}

//TODO:
//  Нумерация строк (не idшники)
//  Включение/выключение столбцов
//  Смена порядка столбцов
//  Выбор строк галочками
//  Нажатие по одной строке с передачей её id

export const MyTableDiv: React.FC<TableProps<any>> = <T extends TElementExample>({
  columns,
  data: dataOriginal,
  paginatable,
  globalSearch,
  scrollable,
}: TableProps<T>) => {

  const {
    dataSelected,
    selectConfig,
    setSelectConfig,
    columnSelections,
  } = tableSelector( dataOriginal )
  const {
    dataSorted,
    sortConfig,
    sortHandler,
  } = tableSort( dataSelected )
  const {
    search,
    setSearch,
    dataSearched,
  } = tableSearch( dataSorted )
  const {
    canNextPage,
    canPreviousPage,
    currentPage,
    dataPaginated,
    lastPage,
    onePageCount,
    setCurrentPage,
    setOnePageCount,
  } = tablePagination( dataSearched, paginatable )

  // noinspection UnnecessaryLocalVariableJS
  const dataFinal = dataPaginated

  return (
    <div className={[ styles.MyTable, scrollable && styles.scrollable ].join( ' ' )}>

      {(globalSearch || paginatable) && <div className={styles.utils}>
        {globalSearch && <div className={styles.search}>
          Поиск:&nbsp;
          <input type='text' value={search} onChange={e => setSearch( e.currentTarget.value )}/>
        </div>}
        {paginatable && <div className={styles.pagination}>
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
        </div>}
      </div>}

      <GridTable columns={columns} scrollable={scrollable}>
        {columns.map( col => (
          <GridHeadCell
            key={col.title}
            style={{
              // cursor    : col.sortable && 's-resize',
              cursor    : col.sortable && 'pointer',
              userSelect: 'none',
            }}
            onClick={!col.sortable ? undefined : () => sortHandler( col.connector )}
          >
            {col.title}
            {sortConfig && sortConfig.column === col.connector && <span>{sortConfig.ascending ? '🔽' : '🔼'}</span>}
            {col.selectable && <select defaultValue='all' onChange={e => setSelectConfig( col.connector, e.currentTarget.value )} onClick={e => e.stopPropagation()}>
              <option value='all'>Все</option>
              {columnSelections && columnSelections[col.connector]?.map( value => <option key={value} value={value}>{value}</option> )}
            </select>}
          </GridHeadCell>
        ) )}

        {!dataFinal.length
          ? <GridNotFound columnsCount={columns.length}>{search ? 'Ничего не найдено' : 'Нет данных'}</GridNotFound>
          : dataFinal.map( row => columns.map( col => (
            <GridDataCell key={col.title}>{row[col.connector] as never}</GridDataCell>
          ) ) )}
      </GridTable>
    </div>
  )
}

export default MyTableDiv
