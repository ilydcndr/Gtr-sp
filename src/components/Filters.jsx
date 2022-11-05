import React from 'react';

const Filters = () => {

  return ( 
		<>
			<div className="sorting filter">
				<p className="filter__title">Sorting</p>
				<div className="filter__content">
					<div>
						<input className="filter__item" type="radio"/>
						<label>
								Price low to heigh
						</label>
					</div>

					<div>
						<input className="filter__item" type="radio"/>
							<label>
									Price hight to low
							</label>
					</div>
					
					<div>
						<input className="filter__item" type="radio"/>
							<label>
								New to old
						</label>
					</div>

					<div>
						<input className="filter__item" type="radio"/>
							<label>
									Old to new
							</label>
					</div>
				</div>
			</div>
				
				<div className="brands filter">
					<p className="filter__title">Brands</p>
					<div className="filter__content search">
						<input className="search" type="search" placeholder='Search brands'/>
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
			</>
  );
}
export {Filters};