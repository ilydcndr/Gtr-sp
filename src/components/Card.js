import React from 'react';
import { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { decreaseCounter } from "../redux/actions/cardActions";

const Card = () => {

	const [count, setcount] = useState(1);

	const decreaseCount = () => {
		if(count > 0){
			setcount(count-1);
		}
	}

	const increaseCount = () => {
		setcount(count+1);
	}

  return ( 
		<div className='cart'>
			<div className='cart__product'>
				<div>
					<p>Ürün</p>
					<p>Fiyat</p>
				</div>
				<div className='cart__quantity'>
					<span onClick={() => decreaseCount()}>-</span>
					<span className='cart__quantity-total'>{count}</span>
					<span onClick={() => increaseCount()}>+</span>
				</div>
			</div>
			<div className='cart__total'>
       65tl
			</div>
		</div>
  );
}

export {Card};