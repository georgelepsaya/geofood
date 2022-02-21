import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals onShow={props.onShowInfo} />
    </>
  );
};

export default Meals;
