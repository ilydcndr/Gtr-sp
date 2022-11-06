import React from "react";
import logo from '../images/logo.png';
import LogoBasket from '../images/logoBasket.png';

const Header = ({total}) => {

	return (
		<div className="header">
			<a href="/" className="navi__brand">
				<img
						alt="logo"
						src={logo}
						style={{
						height: 40.32,
						width: 141.25
						}}
				/>
			</a>
			<div className="summary">
				{console.log(total,"total")}
				<p>
					<img alt="basket" src={LogoBasket}/>  {total !== null ? `₺ ${total}` : ''}
				</p>
			</div>
		</div>
	);
}

export {Header};