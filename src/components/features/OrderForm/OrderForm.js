import React from 'react'
import PropTypes from 'prop-types'
import OrderSummary from '../../features/OrderSummary/OrderSummary'
import OrderOption from '../../features/OrderOption/OrderOption'

import { Row, Col } from 'react-flexbox-grid'
import pricing from '../../../data/pricing.json'
import Button from '../../common/Button/Button'

import { formatPrice } from '../../../utils/formatPrice'
import { calculateTotal } from '../../../utils/calculateTotal'
import settings from '../../../data/settings'

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {

  const { name, contact } = options
  const totalCost = formatPrice(calculateTotal(tripCost, options))

  const payload = {
    tripId,
    tripName,
    countryCode,
    ...options,
    totalCost,
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }

  if (name !== '' && contact !== '') {
    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json()
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse)
      })
  }
  else {
    window.alert('Please, fill in the field')
  }
}


const OrderForm = ({ tripCost, options, setOrderOption, tripId, tripName, countryCode }) => (
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
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
  </Row>
)

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  countryCode: PropTypes.string,
}

export default OrderForm
