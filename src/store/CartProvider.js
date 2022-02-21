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
    const existingCartItemIndex = state.item.findIndex(
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
      updatedItems[existingCartItem] = updatedItem;
    } else {
      // add a new item regular way otherwise
      updatedItems = state.items.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (obj) => console.log(obj),
    removeItem: () => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
