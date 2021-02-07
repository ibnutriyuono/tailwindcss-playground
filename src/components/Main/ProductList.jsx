import React, { useEffect } from 'react'
import ProductCard from '../../components/Main/ProductCard'
import ProductCardSkeleton from '../../components/Skeleton/ProductCardSkeleton'
import { getAllProducts } from '../../store/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

function ProductList() {
  const dispatch = useDispatch()
  const { products, isLoading, isError } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            isLoading
              ? [...Array(5)].map((el, i) => {
                return <ProductCardSkeleton key={i}/>
              })
              : products.map((product, i) => {
                return <ProductCard key={i} product={product}/>
              })
          }         
        </div>
      </div>
    </div>
  )
}

export default ProductList
