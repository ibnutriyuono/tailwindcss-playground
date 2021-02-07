import React from 'react'
import {
  Home,
  ProductDetails,
  UserLogin,
  UserRegister,
  Profile,
  Cart,
  WishList
} from '../pages'
import { Navbar, Footer } from '../components/Template'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <UserLogin />
          </Route>
          <Route path="/register">
            <UserRegister />
          </Route>
          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default RouteConfig
