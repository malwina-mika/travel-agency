import React from 'react'
import styles from './OrderOption.scss'
import PropTypes from 'prop-types'


const OrderOptionText = ({ currentValue, setOptionValue }) => {
  return (
    <div>
      <input className={styles.input} type='text'
        onChange={event => setOptionValue(event.currentTarget.value)}
        value={currentValue} />
    </div>)
}

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
}
export default OrderOptionText
