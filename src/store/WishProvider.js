import React from "react";
import WishContext from "./wish-context";

const WishProvider = (props) => {
  const wishContext = {
    items: [],
    addItem: () => {},
    removeItem: () => {},
  };

  <WishContext.Provider value={wishContext}>
    {props.children}
  </WishContext.Provider>;
};

export default WishProvider;
