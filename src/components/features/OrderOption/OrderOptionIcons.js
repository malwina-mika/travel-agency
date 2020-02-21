import React from 'react'
import styles from './OrderOption.scss'
import PropTypes from 'prop-types'
import { formatPrice } from '../../../utils/formatPrice'
import Icon from '../../common/Icon/Icon'

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (
  <div
    className={styles.icon}>
    {required == undefined || required === 'false' ? '' : (
      <div className={styles.icon}
        value={currentValue}
        onClick={() => setOptionValue('')}>
        <Icon name="times-circle" />none</div>
    )}
    {values.map(value => (
      <div className={value.id === currentValue ? styles.iconActive : styles.icon}
        key={value.id}
        value={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name}

        ({formatPrice(value.price)})</div>
    ))}

  </div>
)

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
}

export default OrderOptionIcons 
