import PropTypes     from 'prop-types'
import React, { FC } from 'react'
import stylesPaid    from '../../../../styles/TablesStyles.module.scss'



const Paid: FC<Record<string, any>> = ( { value } ) => (
  value === null ? <></> :
    <div className={ value ? stylesPaid.yes : stylesPaid.no }>
      { value ? 'Оплачено' : 'Долг' }
    </div>
)

export default Paid

Paid.propTypes = {
  data: PropTypes.shape( {
    value: PropTypes.bool,
  } ),
}