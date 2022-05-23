import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

type FilteringTableInputProps = {
  filter: string
  setFilter: (filter: string) => void
}

const FilteringTableInput: React.FC<FilteringTableInputProps> = ({ filter, setFilter }) => {
  const [ value, setValue ] = useState( filter )
  const setFilterDebounce = useAsyncDebounce( newValue => setFilter( newValue ), 300 )
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue( e.currentTarget.value )
    setFilterDebounce( e.currentTarget.value )
  }

  return (
    <span>
        Filter:&nbsp;
      <input
        type='text'
        value={value}
        onChange={changeHandler}
      />
    </span>
  )
}

export default FilteringTableInput
