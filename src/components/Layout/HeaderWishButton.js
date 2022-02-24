import React, { useContext, useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import WishContext from "../../store/wish-context";
import classes from "./HeaderWishButton.module.css";

const HeaderWishButton = (props) => {
  const wishCtx = useContext(WishContext);
  const [buttonWishIsHighlighted, setWishButtonIsHighlighted] = useState(false);
  const amount = wishCtx.items.length;

  const btnClasses = `${classes.button} ${
    buttonWishIsHighlighted ? classes.bump : ""
  }`;

  const { items } = wishCtx;

  useEffect(() => {
    console.log(items);
    if (wishCtx.items.length === 0) {
      return;
    }

    setWishButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setWishButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <FaHeart />
      </span>
      <span>Liked</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default HeaderWishButton;
