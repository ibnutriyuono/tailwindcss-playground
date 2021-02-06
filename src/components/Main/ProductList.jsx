import React from 'react'
import ProductCard from '../../components/Main/ProductCard'

function ProductList() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            [...Array(8)].map((el, i) => {
              return <ProductCard key={i}/>
            })
          }         
        </div>
      </div>
    </div>
  )
}

export default ProductList
