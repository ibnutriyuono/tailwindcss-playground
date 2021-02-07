import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'

function Navbar(props) {
  const { isLoggedIn } = useSelector(state => state.user)
  return (
    <nav className="md:flex md:justify-between md:flex-row border-b items-center">
      <h1 className="font-bold text-lg uppercase p-4">
        <NavLink exact to="/" activeStyle={{
          color: "green"
        }}>
          Mity Commerce 
        </NavLink>
      </h1>
      {
        isLoggedIn
          ? <ul className="md:flex">
              <li>
                <div onClick={() => alert('ALLO')} className="cursor-pointer">
                  <i className="fa fa-search fa-lg p-4 mr-3"/>
                </div>
              </li>
              <li>
                <NavLink to="/profile" activeStyle={{
                  color: "green"
                }}>
                  <i 
                    className="fa fa-user fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wishlist" activeStyle={{
                  color: "green"
                }}>
                  <i 
                    className="fa fa-heart fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" activeStyle={{
                  color: "green"
                }}>
                  <i 
                    className="fa fa-shopping-cart fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
            </ul>
          : <ul className="md:flex">
              <li>
                <h1 className="font-bold text-lg uppercase p-4">
                  <NavLink to="/login" activeStyle={{
                    color: "green"
                  }}>
                    Login
                  </NavLink>
                </h1>
              </li>
              <li>
                <h1 className="font-bold text-lg uppercase p-4">
                  <NavLink to="/register" activeStyle={{
                    color: "green"
                  }}>
                    Register
                  </NavLink>
                </h1>
              </li>
            </ul>
      }
    </nav>
  )
}

export default Navbar
