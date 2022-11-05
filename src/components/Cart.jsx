import React from 'react';

const Cart = () => {

  return ( 
		<div className='cart'>
			<div className='cart__product'>
				<div>
					<p>Ürün</p>
					<p>Fiyat</p>
				</div>
				<div className='cart__quantity'>
					<span>-</span>
					<span className='cart__quantity-total'>1</span>
					<span>+</span>
				</div>
			</div>
			<div className='cart__product'>
				<div>
					<p>Ürün</p>
					<p>Fiyat</p>
				</div>
				<div className='cart__quantity'>
					<span>-</span>
					<span className='cart__quantity-total'>1</span>
					<span>+</span>
				</div>
			</div>
			<div className='cart__product'>
				<div>
					<p>Ürün</p>
					<p>Fiyat</p>
				</div>
				<div className='cart__quantity'>
					<span>-</span>
					<span className='cart__quantity-total'>1</span>
					<span>+</span>
				</div>
			</div>
			<div className='cart__total'>
       65tl
			</div>
		</div>
  );
}
export {Cart};