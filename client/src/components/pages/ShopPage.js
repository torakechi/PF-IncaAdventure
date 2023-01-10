import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actions/products"
import { Paginate } from "../nav/Paginate";
import { Stack, Pagination } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from "../../redux/actions/actions/stores.js";
import { Link } from "react-router-dom";

const initialState = {
	name: '',
	order: '',
	orderBy: '',
	min: null,
	max: null,
	page: 1,
}

const ShopPage = () => {
	const allProducts = useSelector(state => state.allProducts);
	const [filter, setFilter] = useState(initialState)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(filter));
	}, [filter, dispatch]);


	function handleChange(e) {
		if (e.target.value == "A-Z") {
			setFilter({ ...filter, order: "ASC", orderBy: "name" })

		} else if (e.target.value == "Z-A") {
			setFilter({ ...filter, order: "DESC", orderBy: "name" })

		} else if (e.target.value == 'higher_price') {
			setFilter({ ...filter, order: "DESC", orderBy: "price" })

		} else if (e.target.value == 'lower_price') {
			setFilter({ ...filter, order: "ASC", orderBy: "price" })

		} else {
			console.log('entro')
			setFilter({ ...filter, [e.target.name]: e.target.value })
		}
	};

	function handleCart(e) {
		dispatch(addToCart({ ...e, category: 'product', quantity: 1 }))
	}

	const handlePagination = (event, page) => {
		setFilter({ ...filter, page: page })
	}

	return (
		<div class="container-fluid bg-light px-0 mx-0">
			<div class="container bg-white py-4 pl-7">
				<div class="row text-center p">
					<h2 class="h1">
						Everything you need for your <span class="text-success">adventures</span>
					</h2>
				</div>
				<div className="container-fluid px-sm-3 pt-2 px-4 mt-4">
					<div className="row">
						<div id="sidebar" className="col-lg-2 col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4">
							<h2 className="text-center mb-4 fw-bold text-success">Products</h2>
							<div className="row">

								<div className="col-lg-12 col-sm-6 col-12">
									<div>
										<h6 class="p-1 border-bottom fw-bold">Filter By</h6>

										<div>
											<input className='form-control' type="text" placeholder="Search by word..." name="name" onChange={handleChange} ></input>
										</div>

										<ul class="list-group">
											{/* <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
									<span class="fa fa-circle pr-1" id="men"></span>Word
							</a></li> */}
										</ul>
									</div>
									<h6 class="p-1 border-bottom fw-bold mt-3">Order By</h6>
									<div className="mt-3">
										{/* <h6 className="border-bottom">Cost</h6> */}
										<form class="ml-md-2 ">
											<div class="form-inline border rounded p-sm-2 my-2">
												<input type="radio" name="type" value="A-Z" id="higher" onChange={handleChange} />
												<label for="higher" class="pl-1 pt-sm-0 pt-1">&nbsp;Alphabetical, A-Z</label>
											</div>
											<div class="form-inline border rounded p-sm-2 my-2">
												<input type="radio" name="type" value="Z-A" id="lower" onChange={handleChange} />
												<label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Alphabetical, Z-A</label>
											</div>
											<div class="form-inline border rounded p-sm-2 my-2">
												<input type="radio" name="type" value="higher_price" id="lower" onChange={handleChange} />
												<label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Higher price</label>
											</div>
											<div class="form-inline border rounded p-sm-2 my-2">
												<input type="radio" name="type" value="lower_price" id="lower" onChange={handleChange} />
												<label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Lower price</label>
											</div>
										</form>
									</div>
								</div>

							</div>
						</div>

						{/* card section */}

						<div id="products" className="col-lg-10 px-lg-3 px-0">
							<div class="row">
								{
									allProducts?.rows?.map(p => {
										return (
											<div class="col-lg-3 col-sm-6 col-12 mb-3 ">
												<div class="card ">
													<Link to={`/detail/product/${p.id}`}>
														<img class="card-img-top cardShop-img-top mb-2" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="card image cap" />
													</Link>
													<div class="card-body cardShop-body m-2">
														<h5 class="card-text no-interaction capitalize pb-1">{p.name}</h5>
														<p className="no-interaction pb-2 fw-bold">${p.price}</p>
														<button className="btn btn-primary w-100" onClick={() => handleCart(p)}>Add <AddShoppingCartIcon /></button>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
				<Stack className='mt-3 w-100' spacing={2}>
					<Pagination onChange={handlePagination} page={Number(allProducts.page)} className='mx-auto' count={allProducts.totalPages} shape="rounded" />
				</Stack>
			</div>
			<footer class="container-fluid bg-dark text-center py-2">
				<span class="text-muted">Copyrigth 2022-2023 IncaAdventure SA - pending pattent &#174;</span>
			</footer>
		</div>
	);
};

export default ShopPage;
