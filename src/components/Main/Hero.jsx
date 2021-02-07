import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getBanners } from '../../store/actions/bannerAction'
import { useSelector, useDispatch } from 'react-redux'
import HeroSkeleton from '../Skeleton/HeroSkeleton'

function Hero() {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBanners())
  }, [])
  const { isLoading, isError } = useSelector(state => state.product)
  const { banners } = useSelector(state => state.banner)
  return (
    <>
    {
      isLoading 
        ? <HeroSkeleton />
        : <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{ banners.length ? banners[0].title : '' }
                </h1>
                <p className="mb-8 leading-relaxed">
                  { banners.length ? banners[0].title : '' }
                </p>
              </div>
              <div
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 cursor-pointer"
                onClick={() => {
                  history.push(`/products/2`)
                }}>
                <img className="object-cover object-center rounded" alt="hero" src={ banners.length ? banners[0].image_url : '' }/>
              </div>
            </div>
          </div>
    }
    </>
  )
}

export default Hero
