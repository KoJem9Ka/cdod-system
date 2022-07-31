import React, {
  useEffect,
  useState
}                         from 'react'
import { HexColorPicker } from 'react-colorful'
import styled             from 'styled-components'
import { isEqual }        from 'lodash'
import DropDown           from '../DropDown/DropDown'
import { hexIsDark }      from '../../other/helpers'



const ColorSpan = styled.span<{ color: string }>`
  border           : 1px black solid;
  background-color : ${ props => props.color };
  color            : ${ props => props.color && (hexIsDark( props.color ) ? 'white' : 'black') };
`

const ColorBlock = styled.div`
  display        : flex;
  flex-direction : row;
  align-items    : center;
  height         : 2.5rem;
`

const ColorButtonBlock = styled.div`
  //display: flex;
  //justify-content: space-between;
`

const ColorButton = styled.button`
  font-size        : 0.8rem;
  padding          : 0.3rem;
  margin           : 0.4rem;
  color            : white;
  background-color : #015877;
  cursor           : pointer;
  border-radius    : 1.5rem;
  opacity          : ${ props => (props.disabled ? 0.5 : '') };
`


type ColorPickerProps = {
  isEdit: boolean
  colorOriginal: string | undefined
  setColorOriginal: React.Dispatch<React.SetStateAction<string>>
}

const ColorPicker: React.FC<ColorPickerProps> = ( { isEdit, colorOriginal, setColorOriginal } ) => {
  const [ colorModified, setColorModified ] = useState( '' )
  const [ isPickable, setIsPickable ] = useState( false )

  useEffect( () => {
    setColorModified( colorOriginal as string )
  }, [ colorOriginal ] )

  useEffect( () => {
    if ( !isPickable ) {
      setColorModified( colorOriginal as string )
    }
  }, [ isPickable ] )

  useEffect( () => {
    if ( !isEdit ) {
      setIsPickable( false )
    }

  }, [ isEdit ] )

  const isModified = isEqual( colorOriginal, colorModified )


  return (
    <>
      <ColorBlock>
        <ColorSpan color={ colorModified }>Цвет: { colorModified }</ColorSpan>
        {
          isEdit ? <ColorButton onClick={ () => setIsPickable( !isPickable ) }>Выбрать цвет</ColorButton> : null
        }
      </ColorBlock>
      {
        isPickable
          ? <DropDown>
            <HexColorPicker color={ colorModified } onChange={ setColorModified }/>
            <ColorButtonBlock>
              <ColorButton onClick={ () => setIsPickable( !isPickable ) }>Отмена</ColorButton>
              <ColorButton
                disabled={ isModified }
                onClick={ () => {
                  setColorOriginal( colorModified )
                  setIsPickable( !isPickable )
                } }
              >Сохранить
              </ColorButton>
            </ColorButtonBlock>
          </DropDown>
          : null
      }
    </>

  )
}

export default ColorPicker