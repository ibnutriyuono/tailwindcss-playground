import React from 'react'
import {
  Home,
  ProductDetails,
  UserAuth,
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
          <Route path="/auth">
            <UserAuth />
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
