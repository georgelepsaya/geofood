import React from "react";
import { FaHeart } from "react-icons/fa";
import classes from "./HeaderWishButton.module.css";

const HeaderWishButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <FaHeart />
      </span>
      <span>Liked</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderWishButton;
