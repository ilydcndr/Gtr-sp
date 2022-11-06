import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import {
  Button,
	Row,
	Col
} from "reactstrap";
import product from '../images/product.png';

const Products = ({ data, onAddToCart }) => {
	const [productList, setProductList] = useState([]);
	const [selectedItemType, setSelectedItemType] = useState('mug')

		useEffect(() => {
			setProductList(data?.filter((item) => item.itemType === 'mug'));
		}, [data])
	
		const onSelectItemType = (type) => {
			setProductList(data?.filter((item) => item.itemType === type))
			setSelectedItemType(type)
		}

    return (
      <div className="products">
				<div className='products__title'>Products</div>
				<div className="products__tab">
					<Button className={selectedItemType === 'mug' ? 'active' : ''} onClick={()=>onSelectItemType('mug')}>mug</Button>
					<Button className={selectedItemType !== 'mug' ? 'active' : ''} onClick={()=>onSelectItemType('shirt')}>shirt</Button>
				</div>
				<Row className='products__list'>
					{productList?.map((item, index) => 
							<Col key={index} className='products__list-item' xl={3}>
									<div className="products__img">
										<img alt="product-img" src={product}/>
									</div>
									<p className="products__price">{item.price}</p>
									<p className="products__name">{item.name}</p>
										<Button onClick={()=>onAddToCart(item)}>
											buton
										</Button>
							</Col>
					)}
				</Row>
      </div>
    );
}

function mapStateToProps(state) {
  return { productList: state.sortReducer };
}

export default connect(mapStateToProps)(Products);
export {Products};