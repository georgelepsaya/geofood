import React from "react";
import Modal from "../UI/Modal";
import classes from "./MealInfo.module.css";

const MealInfo = (props) => {
  return (
    <Modal onHide={props.onHide}>
      <div className={classes.total}>Info</div>
    </Modal>
  );
};

export default MealInfo;
