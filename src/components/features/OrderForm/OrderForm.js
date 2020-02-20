import React from 'react'
import PropTypes from 'prop-types'
import OrderSummary from '../../features/OrderSummary/OrderSummary'
import OrderOption from '../../features/OrderOption/OrderOption'

import { Row, Col } from 'react-flexbox-grid'
import pricing from '../../../data/pricing.json'



const OrderForm = ({ tripCost, options, setOrderOption }) => (
  <Row>
    {pricing.map(option =>
      (<Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
          {...option}
        />
      </Col>))}
    <Col xs={12}>
      <OrderSummary
        cost={tripCost}
        options={options}
      />
    </Col>
  </Row>
)

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,
}

export default OrderForm
