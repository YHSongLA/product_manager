import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditProduct = () => {

    // STATE
    const [title, setTitle] = useState()
	const [price, setPrice] = useState()
	const [description, setDescription] = useState()


    // USE PARAMS
    const {product_id} = useParams()

    // USE NAVIGATE
    const navigate = useNavigate()

    // USE EFFECT AXIOS
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                console.log(res.data)
                // DESTRUCTURE RES DATA
                const {title, price, description} = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(error => console.log(error))
    }, [product_id])

    // UPDATE HANDLER FOR ONSUBMIT
    const updateProduct = (e) => {
        e.preventDefault()
        const productObj = {
            title,
            price,
            description
        }
        axios.put("http://localhost:8000/api/products/" + product_id, productObj)
            .then(res => navigate("/"))
            .catch(error => console.log(error))
    }

  return (
    <div className='container'>
        <h2>Product</h2>
		<form onSubmit={updateProduct}>
			<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Title:</label>
				<input onChange={(e) => setTitle(e.target.value)} name="title" type="text" value={title} className="form-control"/>
			</div>
			<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Price:</label>
				<input onChange={(e) => setPrice(e.target.value)} name='price' type="number" value={price} className="form-control"/>
			</div>
			<div className="row mb-3">
				<label className="col-sm-2 col-form-label">Description:</label>
				<input onChange={(e) => setDescription(e.target.value)} name='description' value={description} type="text" className="form-control"/>
			</div>
			<button type="submit" className="btn btn-primary float-end">Update</button>
		</form>
    </div>
  )
}

export default EditProduct