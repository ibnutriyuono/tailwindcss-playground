import React from 'react'
import { useHistory } from 'react-router-dom'

function HeroSkeleton() {
  const history = useHistory()
  return (
    <div className="text-gray-600 body-font animate-pulse">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem ipsum dolor sit amet.
            <br className="hidden lg:inline-block" />Lorem ipsum dolor sit.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates possimus distinctio sunt tenetur velit maiores. Dolorem, odio? Pariatur libero dolorum voluptatem, maiores mollitia tempore, quod ratione assumenda expedita consequatur eius blanditiis veritatis est tempora rerum praesentium earum. Itaque, at autem?
          </p>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 cursor-pointer"
          onClick={() => {
            history.push(`/products/2`)
          }}>
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSkeleton
