import React, { useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import { useState } from 'react'
import axios from 'axios'
import ProductDisplay from '../components/ProductDisplay'

const Main = () => {
  // STATE
  const [products, setProducts] = useState([])

  // STATE REFRESH
  const [submitted, setSubmitted] = useState(false)

  // CONST REFRESH EMPTY ARROW FUNCTION
  const refresh = () => {
    setSubmitted(!submitted)
  }

  // USE EFFECT AXIOS
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [submitted])


  return (
    <div>
        <ProductForm refresh={refresh} />
        <ProductDisplay products={products} refresh={refresh} />
    </div>
  )
}

export default Main