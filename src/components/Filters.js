import React from 'react';
import {
  Row,
  Col
 } from "reactstrap";
 import { useState, useEffect } from 'react';

const Filters = ({sortData, tagList, filterByBrand}) => {
	const [brands, setBrands] = useState([]);
	const [searchBrand, setSearchBrand] = useState('')

	useEffect(() => {

		let url = `http://localhost:3004/companies`
	
			fetch(url)
			.then(response=>response.json())
			.then(responsedData => {
				setBrands(responsedData);
			});	
	}, [])	

	const getBrandToTop = (e) => {
		setSearchBrand(e.target.value);

		/*if(e.keyCode === 32 or e.keyCode === 13){
			const topElement = brands.find((item) => item === searchBrand)
			ReactDOM.findDOMNode(topElement).scrollTop = 0
			console.log(topElement);
	}*/}


  return ( 
		<Row>
			<Col md={4} xl={12}>
				<div className="sorting filter">
					<p className="filter__title">Sorting</p>
					<div className="filter__content">
						<div>
							<input className="filter__item" type="radio" name='sortOption' onClick={()=>sortData('byMin')}/>
							<label>
									Price low to high
							</label>
						</div>

						<div>
							<input className="filter__item" type="radio" name='sortOption' onClick={()=>sortData('byMax')}/>
								<label>
										Price high to low
								</label>
						</div>
						
						<div>
							<input className="filter__item" type="radio" name='sortOption' onClick={()=>sortData('byNew')}/>
								<label>
									New to old
							</label>
						</div>

						<div>
							<input className="filter__item" type="radio" name='sortOption' onClick={()=>sortData('byOld')}/>
								<label>
										Old to new
								</label>
						</div>
					</div>
				</div>
			</Col>	
			<Col md={4} xl={12}>
				<div className="brands filter">
					<p className="filter__title">Brands</p>
					<div className="filter__content search">
						<input className="search" type="search" placeholder='Search brands' name='brand' value={searchBrand} onChange={getBrandToTop}/>
							<div className="filter__content list">
								{brands?.map((item)=>
									<div key={item.name}>
										<input className="filter__item" type="checkbox" value={item.name} onClick={()=>filterByBrand(item)}/>
											<label>
												{item.name}
											</label>
									</div>
								)}
							</div>
					</div>
				</div>
			</Col>
			<Col md={4} xl={12}>
				<div className="tags filter">
					<p className="filter__title">Tags</p>
					<div className="filter__content search">
						<input className="search" type="search" placeholder='Search Tag'/>
						<div className="filter__content list">
							{tagList?.map((item, index)=>
								<div key={index}>
									<input className="filter__item" type="checkbox" value={item}/>
											<label>
												{item}
											</label>
								</div>
							)}
						</div>
					</div>
				</div>
			</Col>
		</Row>
  );
}
export {Filters};