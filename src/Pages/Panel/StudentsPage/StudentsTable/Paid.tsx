import PropTypes     from 'prop-types'
import React, { FC } from 'react'
import stylesPaid    from '../../../../styles/TablesStyles.module.scss'



const Paid: FC<{ value: boolean | null }> = ( { value } ) => (
  value === null ? <></> : (
    <div className={ value ? stylesPaid.yes : stylesPaid.no }>
      { value ? 'Оплачено' : 'Долг' }
    </div>
  )
)

Paid.propTypes = {
  value: PropTypes.bool.isRequired,
}

export default Paid

// Paid.propTypes = {
//   data: PropTypes.shape( {
//     value: PropTypes.oneOf( [ PropTypes.string, null ] ),
//   } ),
// }