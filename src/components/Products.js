import React from "react";
import { connect } from "react-redux";
import {
  Button,
	Row,
	Col
} from "reactstrap";
import { useState } from 'react';
import product from '../images/product.png';

const Products = ({...props}) => {
	const { allData } = props
	const [tabdata, settabdata] = useState(allData);
	const [card, setcard] = useState([]);
	const [quantity, setquantity] = useState(0);
	
		/*settabdata(allData?.filter((item) => item.itemType === 'mug'))*/

		const onSelectTab = (tab) => {
			settabdata(allData?.filter((item) => item.itemType === tab))
		}

		const onAddtoBasket = (product) => {
			if(card.find((item) => item.added === product.added)) {
				setquantity(quantity+1);
			} else {
				setcard([...card].concat({...product}))
			}
		}

    return (
      <div className="products">
				<div className='products__title'>Products</div>
				<div className="products__tab">
					<Button className='active' onClick={()=>onSelectTab('mug')}>mug</Button>
					<Button onClick={()=>onSelectTab('shirt')}>shirt</Button>
				</div>
				<Row className='products__list'>
					{tabdata?.map((item, index) => 
							<Col key={index} className='products__list-item' xl={3}>
									<div className="products__img">
										<img alt="product-img" src={product}/>
									</div>
									<p className="products__price">{item.price}</p>
									<p className="products__name">{item.name}</p>
										<Button onClick={()=>onAddtoBasket(item)}>
											buton
										</Button>
							</Col>
					)}
				</Row>
      </div>
    );
}

function mapStateToProps(state) {
  return { tabdata: state.sortReducer };
}

export default connect(mapStateToProps)(Products);
export {Products};