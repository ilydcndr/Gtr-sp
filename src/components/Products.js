import React from "react";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';
import {
  Button,
	Row,
	Col
} from "reactstrap";
import product from '../images/product.png';

const PER_PAGE = 16;

const Products = ({ data, onAddToCart }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [productList, setProductList] = useState([]);
	const [selectedItemType, setSelectedItemType] = useState('mug')

	useEffect(() => {
		setProductList(data?.filter((item) => item.itemType === 'mug'));
	}, [data])
	
	const onSelectItemType = (type) => {
		setProductList(data?.filter((item) => item.itemType === type))
		setSelectedItemType(type)
	}

	const handlePageClick = ({selected: selectedPage}) => {
		setCurrentPage(selectedPage)
		window.scrollTo(0, 0)
	}

	const offset = currentPage * PER_PAGE;
	const pageCount = Math.ceil(productList?.length / PER_PAGE);

	return (
		<div className="products">
			<div className='products__title'>Products</div>
			<div className="products__tab">
				<Button className={selectedItemType === 'mug' ? 'active' : ''} onClick={()=>onSelectItemType('mug')}>mug</Button>
				<Button className={selectedItemType !== 'mug' ? 'active' : ''} onClick={()=>onSelectItemType('shirt')}>shirt</Button>
			</div>
			<Row className='products__list'>
				{productList?.slice(offset,offset + PER_PAGE).map((item, index) => 
					<Col key={index} className='products__list-item' md={3} xs={6}>
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
			<ReactPaginate
				previousLabel={"Prev"}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				previousClassName={"pagination__link"}
				nextLinkClassName={"pagination__link"}
				disabledLinkClassName={"pagination__link--disabled"}
				activeLinkClassName={"pagination__link--active"}
			/>
		</div>
	);
}
export {Products};