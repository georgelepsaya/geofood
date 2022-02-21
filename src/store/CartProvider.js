import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
