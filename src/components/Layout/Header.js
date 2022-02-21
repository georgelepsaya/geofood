import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import HeaderWishButton from "./HeaderWishButton";
import mealsImage from "../../assets/food.jpg";
import georgiaFlag from "../../assets/georgia.svg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.name}>
          <img src={georgiaFlag} width="60" />
          <h1>GeoFood</h1>
        </div>
        <div className={classes.menu}>
          <HeaderWishButton onShow={props.onShowWish} />
          <HeaderCartButton onShow={props.onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
