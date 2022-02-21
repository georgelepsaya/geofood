import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <FaCartArrowDown />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
