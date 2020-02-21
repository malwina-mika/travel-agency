import React from 'react'
import styles from './OrderOption.scss'
import PropTypes from 'prop-types'
import { formatPrice } from '../../../utils/formatPrice'


const OrderOptionNumber = ({ limits, currentValue, setOptionValue, price }) => (
  <div
    className={styles.number}
  >
    <input type='number' className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)} />
    ({formatPrice(price)})
  </div>
)

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  price: PropTypes.string,
  limits: PropTypes.object,
}

export default OrderOptionNumber 
