/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Column } from 'react-table'

export interface BasicTableProps {
  readonly columns: readonly Column<any>[]
  data: Record<string, any>[]
}
