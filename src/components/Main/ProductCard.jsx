import React from 'react'
import { useHistory } from 'react-router-dom'

function ProductCard(props) {
  const history = useHistory()
  return (
    <div 
      className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
      onClick={() => {
        history.push(`/products/${ props.product.id }`)
      }}>
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ props.product.image_url } />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ props.product.Category.name }</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{ props.product.name }</h2>
        <p className="mt-1">{ props.product.price }</p>
      </div>
    </div>
  )
}

export default ProductCard
