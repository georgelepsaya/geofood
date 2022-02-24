import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${+cartCtx.totalAmount.toFixed(2)}`;
  // to show or not "Order" button
  const hasItems = cartCtx.items.length > 0;

  // amount: 1, because current item's amount is not necessery 1, but more
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          item={item}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
          items={cartCtx.items}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
