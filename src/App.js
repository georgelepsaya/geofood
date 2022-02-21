import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Wish from "./components/Wish/Wish";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [wishIsShown, setWishIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showWishHandler = () => {
    setWishIsShown(true);
  };

  const hideWishHandler = () => {
    setWishIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
      {wishIsShown && <Wish onHide={hideWishHandler} />}
      <Header onShowCart={showCartHandler} onShowWish={showWishHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
