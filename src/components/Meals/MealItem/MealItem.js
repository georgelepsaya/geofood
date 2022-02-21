import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const id = props.id;

  const cartCtx = useContext(CartContext);

  return (
    <li className={classes.meal}>
      <div className={classes.descr}>
        <img src={props.imgsrc} />
        <div className={classes.info}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          <button onClick={() => props.onShow(id)}>See more</button>
        </div>
      </div>
      <div className={classes.form}>
        <MealItemForm id={props.id} />
        <button>I like it!</button>
      </div>
    </li>
  );
};

export default MealItem;
