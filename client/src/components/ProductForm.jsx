import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ProductForm = (props) => {
	// STATE
	const [title, setTitle] = useState()
	const [price, setPrice] = useState()
	const [description, setDescription] = useState()

	// DESTRUCTURE REFRESH FUNCTION
	const {refresh} = props

	const createProduct = (e) => {
		e.preventDefault();
		const productObj = {
			title,
			price,
			description
		}
	
		// AXIOS POST
		axios.post("http://localhost:8000/api/products", productObj)
			.then(newProduct => refresh())
			.catch(error => console.log(error))
	}

  return (
    <div className='container w-50'>
        <h2>Product</h2>
		<form onSubmit={createProduct}>
			<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Title:</label>
				<input onChange={(e) => setTitle(e.target.value)} name="title" type="text" className="form-control"/>
				</div>
				<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Price:</label>
				<input onChange={(e) => setPrice(e.target.value)} name='price' type="number" className="form-control"/>
				</div>
				<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Description:</label>
				<input onChange={(e) => setDescription(e.target.value)} name='description' type="text" className="form-control"/>
				</div>
			<button type="submit" className="btn btn-primary float-end">add</button>
		</form>
    </div>
  )
}

export default ProductForm