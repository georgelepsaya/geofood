import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // updating total amount by adding price of item multiplied by its amount (amount from ref of input)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // using findIndex function to find an array index of item with id same as id of an element we want to add
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // using this index to get the element from array
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // check if existing cart item exists and if so we create an updatedItem, which will contain everything from existingCartItem, but the amount will be increased by amount of item we are adding to cart
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // put all current items in updatedItems variable that we defined earlier
      updatedItems = [...state.items];
      // assgning updatedItem to existing item' index in array (overwriting it with updated amount info)
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // add a new item regular way otherwise
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // find index of element to be removed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // get element by that index
    const existingCartItem = state.items[existingCartItemIndex];

    // updating total amount
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
