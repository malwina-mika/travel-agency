import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import styles from './OrderForm.scss';
// import SideImage from '../../common/SideImage/SideImage';
// import DetailsBox from '../../common/DetailsBox/DetailsBox';
// import DetailsImage from '../../common/DetailsImage/DetailsImage';
// import List from '../../common/List/List';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';

const OrderForm = () => (


  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>



);

OrderForm.propTypes = {

  name: PropTypes.string,

};

export default OrderForm;
