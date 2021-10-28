import React from "react";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import FavouritesPage from "./pages/favourites-page/favourites-page.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import ProductPage from "./pages/product-page/product-page.component";
import { SigninPage } from "./pages/signin-page/signin-page.component";
import { Footer } from "./components/footer/footer.component";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/favourites" component={FavouritesPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/product/:collectionId" component={ProductPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
