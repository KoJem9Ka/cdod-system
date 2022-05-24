import React from 'react'
import styles from './GridTable.module.scss'
import styled from 'styled-components'
import { GridTableContextProps, TGridTableExampleObject, useGridTableContext } from './GridTable'
import GridTable_Utils from './components/GridTable_Utils'
import GridTable_Head from './components/GridTable_Head'
import GridTable_Body from './components/GridTable_Body'
import { TColumnConfig } from './types'

export const linkElement = (tag: string, class_: string): React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> => props => React.createElement( tag, { ...props, className: [ class_, props.className ].join( ' ' ) }, props.children )
// export const GridHeadCell = linkElement( 'div', 'th' )
export const GridHeadCell = styled.div.attrs( { className: 'th' } )<{
  sortable: TColumnConfig<TGridTableExampleObject>['sortable']
}>`
  ${props => props.sortable && 'cursor : pointer;'}
  user-select : none;
`
export const GridDataCell = linkElement( 'div', 'td' )
export const GridNotFound = styled.div.attrs( { className: 'td' } )<{ columnsCount: number }>`
  padding     : 10rem;
  grid-column : span ${props => props.columnsCount};
  text-align  : center;
  font-size   : 2rem;
`

type GridTableProps = { columns: GridTableContextProps<any>['columnsConfig'], scrollable?: true }
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

//TODO:
//  Нумерация строк (не idшники)
//  Включение/выключение столбцов
//  Смена порядка столбцов
//  Выбор строк галочками
//  Нажатие по одной строке с передачей её id

export const GridTableItSelf: React.FC = () => {
  const {
    columnsConfig,
    scrollable,
  } = useGridTableContext()

  return (
    <div className={[ styles.MyTable, scrollable && styles.scrollable ].join( ' ' )}>
      <GridTable_Utils/>
      <GridTable columns={columnsConfig} scrollable={scrollable}>
        <GridTable_Head/>
        <GridTable_Body/>
      </GridTable>
    </div>
  )
}

export default GridTableItSelf
