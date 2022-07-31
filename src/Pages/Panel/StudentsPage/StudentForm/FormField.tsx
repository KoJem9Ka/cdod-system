import React, {
  ChangeEvent,
  ReactNode,
  useId,
  useState
}                    from 'react'
import {
  Caption,
  SubTitle,
  TextLine,
  Title
}                    from '../../../../components/Forms'
import { AllOrNone } from '../../../../other/typing'



type Props<T extends object> = {
  title?: string
  subtitle?: string
  caption?: string
} & (Texting | Selecting<T>)

type Selecting<T extends object> = {
  isEdit: boolean

  value: T | null | undefined
  valueType: 'select'

  values: T[]
  onChange: ( id: T )=> void

  getId: ( obj: T )=> string | number
  getText: ( obj: T )=> string
}

type Texting = {
  value: string | null | undefined
  valueType?: 'text' | 'textarea' | 'date'
} & AllOrNone<{
  isEdit: boolean
  onChange: ( value: string )=> void
}>

function FormField<T extends object>( p: Props<T> ) {
  const id = useId()
  const [ isValid, setIsValid ] = useState<boolean>( true )

  const titles = (<>
    { p.title && <Title>{ p.title }</Title> }
    { p.subtitle && <SubTitle>{ p.subtitle }</SubTitle> }
    { p.caption && <Caption>{ p.caption }</Caption> }
  </>)
  let field: ReactNode

  if ( !p.isEdit )
    field = (
      <TextLine>{
        p.valueType === 'select'
          ? p.value && p.getText( p.value ) || ''
          : p.value }
      </TextLine>
    )
  else switch ( p.valueType ) {
  case 'select':
    field = (<>
      <TextLine
        as='input'
        defaultValue={ p.value && p.getText( p.value ) || '' }
        isValid={ isValid }
        list={ id }
        onChange={ ( e: ChangeEvent<HTMLInputElement> ) => {
          const foundValue = p.values.find( v => p.getText( v ) === e.currentTarget.value )
          if ( foundValue ) p.onChange( foundValue )
          setIsValid( !!foundValue )
        } }
      />
      <datalist id={ id }>
        { p.values.map( value => <option key={ p.getId( value ) } value={ p.getText( value ) }>{ p.getText( value ) }</option> ) }
      </datalist>
    </>)
    break
  default:
    field = (
      <TextLine
        as={ p.valueType === 'textarea' ? 'textarea' : 'input' }
        type={ p.valueType === 'textarea' ? undefined : p.valueType || 'text' }
        value={ p.value || undefined }
        onChange={ p.onChange === undefined ? undefined : ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => p.onChange( e.currentTarget.value ) }
      />
    )
  }

  return (
    p.value || ('isEdit' in p && p.isEdit) ? <>
      { titles }
      { field }
    </> : null
  )
}


export default FormField