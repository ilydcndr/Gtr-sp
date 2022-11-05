import React from 'react';
import { Filters } from './Filters';
import { Products } from './Products';
import { Cart } from './Cart';
import {
 Row,
 Col
} from "reactstrap";

const Content = () => {

  return (
    <Row className="content">
			<Col xl={3}>
				<Filters/>
			</Col>
			<Col xl={6}>
				<Products/>
			</Col>
			<Col xl={3}>
				<Cart/>
			</Col>
    </Row>
  );
}
export {Content};