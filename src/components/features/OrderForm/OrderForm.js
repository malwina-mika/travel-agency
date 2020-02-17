import React from 'react'
import PropTypes from 'prop-types'
import OrderSummary from '../../features/OrderSummary/OrderSummary'
import OrderOption from '../../features/OrderOption/OrderOption'

import { Row, Col } from 'react-flexbox-grid'

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options} />
      <OrderOption />
    </Col>
  </Row>
)

OrderForm.propTypes = {
  options: PropTypes.node,
  tripCost: PropTypes.string,
}

export default OrderForm
