import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow , setCartShow] = useState(false);

  const showCartHandler = props => {
    setCartShow(true)
  }

  const hideCartHandler = props => {
    setCartShow(false)
  }

  return (
    <CartProvider>
      {cartShow && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
