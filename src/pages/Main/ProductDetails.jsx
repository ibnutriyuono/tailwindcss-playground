import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams()
  return (
    <div>
      <h1>Product Details</h1>
      { productId }
    </div>
  )
}

export default ProductDetails
