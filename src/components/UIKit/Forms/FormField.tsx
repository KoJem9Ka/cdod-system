import { ChangeEvent, memo, ReactNode, useId, useState } from 'react'
import { NON_EXISTING_ID } from '../../../other/helpers'
import { Caption, SubTitle, TextField, Title } from './index'

type Props<T extends object | string, N> = {
  title?: string
  subtitle?: string
  caption?: string
  isEdit: boolean
} & (Texting | SelectingSearch<T, N>)

type SelectingSearch<T extends object | string, N> = {
  variant: 'search' | 'select'
  default?: true
  canNull?: N

  element: T | null | undefined
  elements: T[]

  onSelect: (id: T | (N extends true ? null : never))=> void

  getId: (el: T)=> string | number
  getText: (el: T)=> string
}

type Texting = {
  variant?: 'text' | 'textarea' | 'date'
  validator?: RegExp | ((text: string)=> boolean)

  text: string | null | undefined
  onEdit: (value: string)=> void
}

const FormField = <T extends object | string, N extends boolean = false>(p: Props<T, N>) => {
  const id = useId()
  const [ isValid, setIsValid ] = useState<boolean>(true)
  const text = ('text' in p ? p.text : p.element && p.getText(p.element)) || ''

  const titles = (
    <>
      {p.title && <Title>{p.title}</Title>}
      {p.subtitle && <SubTitle>{p.subtitle}</SubTitle>}
      {p.caption && <Caption>{p.caption}</Caption>}
    </>
  )
  let field: ReactNode
  // TODO: У select и search при пропе canNull нужно добавить опшены "Пусто"
  if (!p.isEdit) field = <TextField>{text}</TextField>
  else if (p.variant === 'search')
    field = (
      <>
        <TextField
          as='input'
          defaultValue={text}
          isValid={isValid}
          list={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // eslint-disable-next-line eqeqeq
            const foundValue = p.elements.find(v => p.getText(v) == e.currentTarget.value)
            foundValue ? p.onSelect(foundValue) : p.canNull === true && p.onSelect(null as any)
            setIsValid(p.canNull || !!foundValue)
          }}
        />
        <datalist id={id}>
          {p.elements.map(value => (
            <option key={p.getId(value)} value={p.getText(value)}>
              {p.getText(value)}
            </option>
          ))}
        </datalist>
      </>
    )
  else if (p.variant === 'select')
    field = (
      <>
        <TextField
          as='select'
          defaultValue={NON_EXISTING_ID}
          value={(p.element && p.getId(p.element)) || undefined}
          data-select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            // eslint-disable-next-line eqeqeq
            const foundValue = p.elements.find(el => p.getId(el) == e.currentTarget.value)
            foundValue && p.onSelect(foundValue)
            setIsValid(p.canNull || !!foundValue)
          }}
        >
          <>
            {p.default && <option value={NON_EXISTING_ID}>Выбор:</option>}
            {p.elements.map(el => (
              <option key={p.getId(el)} value={p.getId(el)}>
                {p.getText(el)}
              </option>
            ))}
          </>
        </TextField>
      </>
    )
  else field = (
    <TextField
      as={p.variant === 'textarea' ? 'textarea' : 'input'}
      type={p.variant === 'textarea' ? undefined : p.variant || 'text'}
      value={text}
      onChange={'onEdit' in p ? (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => p.onEdit(e.currentTarget.value) : undefined}
    />
  )

  return text || p.isEdit ? (
    <>
      {titles}
      {field}
    </>
  ) : null
}

export default memo(FormField) as typeof FormField
