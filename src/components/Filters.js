import React from 'react';
import {
  Row,
  Col
 } from "reactstrap";
 import { useState, useEffect } from 'react';

const Filters = ({sortData}) => {
	const [brands, setBrands] = useState(null);

	useEffect(() => {

		let url = `http://localhost:3004/companies`
	
			fetch(url)
			.then(response=>response.json())
			.then(responsedData => {
				setBrands(responsedData);
			});

			console.log(brands);
	}, [])

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
				{brands.map((item)=>
					<div className="brands filter">
						<p className="filter__title">Brands</p>
						<div className="filter__content search">
							<input className="search" type="search" placeholder='Search brands'/>
							<div className="filter__content list">
								<div key={item.name}>
									<input className="filter__item" type="checkbox"/>
										<label>
											{item.name}
										</label>
								</div>
							</div>
						</div>
					</div>
				)}	
			</Col>
			<Col md={4} xl={12}>
				<div className="tags filter">
					<p className="filter__title">Tags</p>
					<div className="filter__content search">
						<input className="search" type="search" placeholder='Search Tag'/>
						<div className="filter__content list">
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>

							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>

							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
							<div>
								<input className="filter__item" type="checkbox"/>
										<label>
											Check me out
										</label>
							</div>
						</div>
					</div>
				</div>
			</Col>
		</Row>
  );
}
export {Filters};