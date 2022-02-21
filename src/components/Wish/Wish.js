import React from "react";
import Modal from "../UI/Modal";
import classes from "./Wish.module.css";

const Wish = (props) => {
  return (
    <Modal onHide={props.onHide}>
      <div className={classes.total}>I like this food</div>
    </Modal>
  );
};

export default Wish;
