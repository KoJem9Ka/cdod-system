/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { BasicTableProps } from '../config'
import { useAbsoluteLayout, useTable } from 'react-table'
import styled from 'styled-components'

const linkElement = (tag: string, class_: string): React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> => props => React.createElement( tag, { ...props, className: [ class_, props.className ].join( ' ' ) }, props.children )

const Rtable = linkElement( 'div', 'table' ),
  Rthead = linkElement( 'div', 'thead' ),
  Rtr = linkElement( 'div', 'tr' ),
  Rth = linkElement( 'div', 'th' ),
  Rtbody = linkElement( 'div', 'tbody' ),
  Rtd = linkElement( 'div', 'td' ),
  Rtfoot = linkElement( 'div', 'tfoot' )


const Styles = styled.div`

  .table {
    width  : 100%;
    //display : block;
    border : 1px solid #000;
    //max-width  : 700px;
    //overflow-x : auto;
    height : 600px;
  }

  .thead {
    font-weight : bold;
  }

  .tbody {
    overflow-x : hidden;
    overflow-y : auto;
  }

  .tr {
    border-bottom : 1px solid #000;
    height        : 30px;

    &.tr {
      :last-child {
        border : 0;
      }
    }
  }

  .td, th {
    //height       : 100%;
    //line-height  : 30px;
    border-right : 1px solid #000;
    padding      : 5px 20px;

    :last-child {
      border : 0;
    }
  }

  //   padding  : 1rem;
  // ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  //   display  : block;
  // ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  //   overflow : auto;
  //
  //   .table {
  //     border-spacing : 0;
  //     border         : 1px solid black;
  //
  //     .thead {
  //       overflow-y : auto;
  //       overflow-x : hidden;
  //     }
  //
  //     .tbody {
  //       overflow-y : scroll;
  //       overflow-x : hidden;
  //       height     : 80vh;
  //     }
  //
  //     .tr {
  //       :last-child {
  //         .td {
  //           border-bottom : 0;
  //         }
  //       }
  //
  //       border-bottom : 1px solid black;
  //     }
  //
  //     .th,
  //     .td {
  //       margin       : 0;
  //       padding      : 0.5rem;
  //       border-right : 1px solid black;
  //
  //       position     : relative;
  //
  //       :last-child {
  //         border-right : 0;
  //       }
  //
  //       .resizer {
  //         right        : calc(-5px / 2);
  //         background   : blue;
  //         width        : 5px;
  //         height       : 100%;
  //         position     : absolute;
  //         top          : 0;
  //         z-index      : 1;
  //         touch-action : none;
  //         user-select  : none;
  //
  //         &.isResizing {
  //           background : red;
  //         }
  //       }
  //     }
  //   }
`


const headerProps = (props: any, { column }: any) => getStyles( props, column.align )

const cellProps = (props: any, { cell }: any) => getStyles( props, cell.column.align )

const getStyles = (props: any, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems    : 'flex-start',
      display       : 'flex',
    },
  }
]

const TestTable: React.FC<BasicTableProps> = ({ columns, data }) => {
  const defaultColumn = useMemo( () => ({
    // minWidth: 30,
    // width   : 150,
    // maxWidth: 200,
  }), [] )

  const {
    rows,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    headerGroups,
  } = useTable( { columns, data, defaultColumn },
    // useFlexLayout,
    useAbsoluteLayout,
    // useResizeColumns,
    hooks => {
      hooks.useInstanceBeforeDimensions.push( ({ headerGroups: headerGroups1 }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups1[0].headers[0]
        selectionGroupHeader.canResize = false
      } )
    }
  )

  return (
    <Styles>
      <Rtable {...getTableProps()}>
        <Rthead>
          {headerGroups.map( headerGroup => (
            <Rtr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map( column => (
                <Rth {...column.getHeaderProps( headerProps )}>
                  {column.render( 'Header' )}
                </Rth>
              ) )}
            </Rtr>
          ) )}
        </Rthead>
        <Rtbody {...getTableBodyProps()}>
          {rows.map( row => {
            prepareRow( row )
            return (
              <Rtr {...row.getRowProps()}>
                {row.cells.map( cell => (
                  <Rtd {...cell.getCellProps( cellProps )}>
                    {cell.render( 'Cell' )}
                  </Rtd>
                ) )}
              </Rtr>
            )
          } )}
        </Rtbody>
      </Rtable>
    </Styles>
  )
}

export default TestTable
