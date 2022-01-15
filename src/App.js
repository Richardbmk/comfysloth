import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
        <Router exact path="/about">
          <About />
        </Router>
        <Router exact path="/cart">
          <Cart />
        </Router>
        <Router exact path="/products">
          <Products />
        </Router>
        <Router exact path="/products/:id" children={<SingleProduct />} />
        <Router exact path="/checkout">
          <Checkout />
        </Router>
        <Router exact path="*">
          <Error />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
