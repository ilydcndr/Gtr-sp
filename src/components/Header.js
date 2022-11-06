import React from "react";
import logo from '../images/logo.png';
import LogoBasket from '../images/logoBasket.png';

const Header = () => {

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
						<p><img alt="basket" src={LogoBasket}/> ₺ Özet</p>
					</div>
      </div>
    );
}

export {Header};