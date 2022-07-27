import React              from 'react'
import Select             from 'react-select'
import StateManagedSelect from 'react-select/dist/declarations/src/stateManager'



const CustomSelect: StateManagedSelect = ( props ) => (
  <Select
    { ...props }
    noOptionsMessage={ () => 'Пусто' }
  />
)

export default CustomSelect