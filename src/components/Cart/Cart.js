import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onHide={props.onHide}>
      <div className={classes.total}>Hello</div>
    </Modal>
  );
};

export default Cart;
