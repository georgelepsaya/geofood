import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Wish.module.css";
import WishContext from "../../store/wish-context";
import WishItem from "./WishItem";

const Wish = (props) => {
  const wishCtx = useContext(WishContext);

  const wishItemRemoveHandler = (id) => {
    wishCtx.removeItem(id);
  };

  const wishItems = wishCtx.items.map((item) => (
    <WishItem
      key={item.id}
      item={item}
      onRemove={() => wishItemRemoveHandler(item.id)}
    />
  ));

  return (
    <Modal onHide={props.onHide}>
      <div className={classes.total}>You liked these meals</div>
      {wishItems}
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Wish;
