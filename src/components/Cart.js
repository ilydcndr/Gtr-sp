import React from 'react';
import { useState } from 'react';
/*import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { decreaseCounter } from "../redux/actions/cartActions";*/

const Cart = ({cart, onAddToCart, onRemoveFromCart, total}) => {
	
  return ( 
		<div className= { cart.length > 0 ? 'cart': 'hidden'}>
			{cart.map((item, index) =>
				<div className='cart__product' key={index}>
					<div>
						<p>{item.name}</p>
						<p>{item.price}</p>
					</div>
					<div className='cart__quantity'>
						<span onClick={() => onRemoveFromCart(item)}>-</span>
						<span className='cart__quantity-total'>{item.quantity}</span>
						<span onClick={() => onAddToCart(item)}>+</span>
					</div>
			</div>
			)}
			<div className='cart__total'>
       {total}
			</div>
		</div>
  );
}

export {Cart};