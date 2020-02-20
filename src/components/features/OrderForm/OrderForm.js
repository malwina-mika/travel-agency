import React from 'react'
import PropTypes from 'prop-types'
import OrderSummary from '../../features/OrderSummary/OrderSummary'
import OrderOption from '../../features/OrderOption/OrderOption'

import { Row, Col } from 'react-flexbox-grid'
import pricing from '../../../data/pricing.json'



const OrderForm = props => (
  <Row>
    {pricing.map(option => (<Col md={4} key={option.id}> <OrderOption {...option} /></Col>))}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options} />
    </Col>
  </Row>
)

OrderForm.propTypes = {
  options: PropTypes.node,
  tripCost: PropTypes.string,
}

export default OrderForm
