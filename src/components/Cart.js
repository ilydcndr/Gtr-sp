import React from 'react';

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
						<span onClick={() => onRemoveFromCart(item)} data-testid = 'decreaseButton'>-</span>
						<span className='cart__quantity-total' data-testid = 'initialQuantity'>{item.quantity}</span>
						<span onClick={() => onAddToCart(item)} data-testid = 'increaseButton'>+</span>
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