export type SimpleObject = Record<string, any>

export type TColumnConfig<TElement extends SimpleObject> = {
  title: string
  connector: keyof TElement & string

  sortable?: true
  selectable?: true

  maxContent?: true
  minContent?: true

  maxWidth?: number
  minWidth?: number

  textAlign?: 'left' | 'center' | 'right' | 'justify'
  textIndent?: string
}

export type TTableColumnsConfig<T extends SimpleObject> = TColumnConfig<T>[]
