import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link 
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          to="/">
          <span className="ml-3 text-xl">Mity Commerce</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© { new Date().getFullYear() } 
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link target="_blank" className="text-gray-500" to={"//github.com/ibnutriyuono"}>
            <i className="fa fa-github fa-lg"></i>
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
