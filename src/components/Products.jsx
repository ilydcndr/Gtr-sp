import React from "react";
import {
  Button,
	Row,
	Col
} from "reactstrap";
import product from '../images/product.png';

const Products = () => {

    return (
      <div className="products">
				<div className='products__title'>Products</div>
				<div className="products__tab">
					<Button className='active'>mug</Button>
					<Button>shirt</Button>
				</div>
				<Row className='products__list'>
					<Col className='products__list-item' xl={3}>
						<div>
							<div className="products__img">
								<img alt="product-img" src={product}/>
							</div>
							<p className="products__price">fiyat</p>
							<p className="products__name">ürün adı</p>
								<Button>
									buton
								</Button>
						</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
									<Button>
										buton
									</Button>
							</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
									<Button>
										buton
									</Button>
							</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
									<Button>
										buton
									</Button>
							</div>
					</Col>
				</Row>
				<Row className='products__list'>
					<Col className='products__list-item' xl={3}>
						<div>
							<div className="products__img">
								<img alt="product-img" src={product}/>
							</div>
							<p className="products__price">fiyat</p>
							<p className="products__name">ürün adı</p>
							<Button>
								buton
							</Button>
						</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
								<Button>
									buton
								</Button>
							</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
								<Button>
									buton
								</Button>
							</div>
					</Col>
					<Col className='products__list-item' xl={3}>
						<div>
								<div className="products__img">
									<img alt="product-img" src={product}/>
								</div>
								<p className="products__price">fiyat</p>
								<p className="products__name">ürün adı</p>
								<Button>
									buton
								</Button>
							</div>
					</Col>
				</Row>
      </div>
    );
}

export {Products};