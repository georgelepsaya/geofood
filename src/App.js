import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Wish from "./components/Wish/Wish";
import MealInfo from "./components/MealInfo/MealInfo";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [wishIsShown, setWishIsShown] = useState(false);
  const [infoIsShown, setInfoIsShown] = useState(false);

  const [mealToShow, setMealToShow] = useState("");

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

  const showInfoHandler = (id) => {
    setMealToShow(id);
    setInfoIsShown(true);
  };

  const hideInfoHandler = () => {
    setInfoIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
      {wishIsShown && <Wish onHide={hideWishHandler} />}
      {infoIsShown && <MealInfo onHide={hideInfoHandler} id={mealToShow} />}
      <Header onShowCart={showCartHandler} onShowWish={showWishHandler} />
      <main>
        <Meals onShowInfo={showInfoHandler} />
      </main>
    </CartProvider>
  );
};

export default App;
