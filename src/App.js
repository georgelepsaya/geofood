import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Wish from "./components/Wish/Wish";
import MealInfo from "./components/MealInfo/MealInfo";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [wishIsShown, setWishIsShown] = useState(false);
  const [infoIsShown, setInfoIsShown] = useState(false);

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

  const showInfoHandler = () => {
    setInfoIsShown(true);
  };

  const hideInfoHandler = () => {
    setInfoIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
      {wishIsShown && <Wish onHide={hideWishHandler} />}
      {infoIsShown && <MealInfo onHide={hideInfoHandler} />}
      <Header onShowCart={showCartHandler} onShowWish={showWishHandler} />
      <main>
        <Meals onShowInfo={showInfoHandler} />
      </main>
    </>
  );
};

export default App;
