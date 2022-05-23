import React from 'react'

type FilteringColumnInputProps = {
  column: any
}

const FilteringColumnInput: React.FC<FilteringColumnInputProps> = ({ column: { filterValue, setFilter } }) => (
  <input
    type='text'
    value={filterValue}
    style={{
      width: '100%',
    }}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter( e.currentTarget.value )}
  />
)

export default FilteringColumnInput
