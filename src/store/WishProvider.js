import React, { useState } from "react";
import WishContext from "./wish-context";

const WishProvider = (props) => {
  const [wishState, setWishState] = useState([]);

  const addWishHandler = (item) => {
    if (wishState.includes(item)) {
      return;
    } else {
      setWishState((prevState) => [...prevState, item]);
    }
  };

  const removeWishHandler = (id) => {
    const filtered = wishState.filter((wish) => wish.id !== id);
    setWishState(filtered);
  };

  const wishContext = {
    items: wishState,
    addItem: addWishHandler,
    removeItem: removeWishHandler,
  };

  return (
    <WishContext.Provider value={wishContext}>
      {props.children}
    </WishContext.Provider>
  );
};

export default WishProvider;
