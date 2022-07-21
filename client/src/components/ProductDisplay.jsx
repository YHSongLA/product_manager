import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductDisplay = (props) => {

    // DESTRUCTURE
    const {products, refresh} = props
    

    // DELETE FUNCTION
    const destroyProduct = (product_id) => {
        console.log(product_id)
        axios.delete("http://localhost:8000/api/products/" + product_id)
            .then(res => refresh())
            .catch(error => console.log(error))
    }

  return (
    <div className='container m-auto mt-5'>
        <table className='border p-3'>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td>
                                    <Link to={"/" + product._id}>{product.title}</Link>
                                </td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={"/"+product._id+"/edit"}>Edit </Link> |
                                    <button onClick={() => destroyProduct(product._id)} className='btn btn-outline-danger'> Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductDisplay