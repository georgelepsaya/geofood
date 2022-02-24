import React from "react";
import classes from "./WishItem.module.css";

const WishItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  const id = props.item.id;

  return (
    <li className={classes["wish-item"]}>
      <div className={classes.place}>
        <div className={classes.info}>
          <img className={classes.wishImg} src={props.item.imgsrc} />
          <div className={classes.summary}>
            <h2>{props.item.name}</h2>
            <span className={classes.price}>{price}</span>
          </div>
        </div>
        <button onClick={props.onRemove}>Delete</button>
      </div>
    </li>
  );
};

export default WishItem;
