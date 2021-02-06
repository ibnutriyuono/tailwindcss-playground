import React from 'react'
import { NavLink, useLocation } from "react-router-dom"

function Navbar(props) {
  const { pathname } = useLocation()
  return (
    <nav className="md:flex md:justify-between md:flex-row border-b items-center">
      <h1 className="font-bold text-lg uppercase p-4">
        <NavLink exact to="/" activeStyle={{
          color: "red"
        }}>
          Mity Commerce
        </NavLink>
      </h1>
      {
        !props.isLoggedIn
          ? <ul className="md:flex">
              <li>
                <div onClick={() => alert('ALLO')} className="cursor-pointer">
                  <i className="fa fa-search fa-lg p-4 mr-3"/>
                </div>
              </li>
              <li>
                <NavLink to="/profile" activeStyle={{
                  color: "red"
                }}>
                  <i 
                    className="fa fa-user fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wishlist" activeStyle={{
                  color: "red"
                }}>
                  <i 
                    className="fa fa-heart fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" activeStyle={{
                  color: "red"
                }}>
                  <i 
                    className="fa fa-shopping-cart fa-lg p-4 mr-3"/>
                </NavLink>
              </li>
            </ul>
          : <ul className="md:flex">
              <li>
                <h1 className="font-bold text-lg uppercase p-4">
                  <NavLink to="/auth" activeStyle={{
                    color: "red"
                  }}>
                    Login
                  </NavLink>
                </h1>
              </li>
              <li>
                <h1 className="font-bold text-lg uppercase p-4">
                  <NavLink to="/auth" activeStyle={{
                    color: "red"
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
