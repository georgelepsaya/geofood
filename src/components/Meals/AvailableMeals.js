import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

import khachapuri from "../../assets/khachapuri.jpg";
import khinkali from "../../assets/khinkali.jpg";
import adjar from "../../assets/adjar.jpg";
import sacivi from "../../assets/sacivi.jpg";
import chkmeruli from "../../assets/chkmeruli.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khachapuri",
    description:
      "Absolutely delicious classic Georgian meal with finest cheese.",
    price: 9.49,
    imgsrc: khachapuri,
  },
  {
    id: "m2",
    name: "Khinkali",
    description:
      "The most popular Georgian food. Delicious meat covered with dough.",
    price: 4.99,
    imgsrc: khinkali,
  },
  {
    id: "m3",
    name: "Satsivi",
    description: "Chicken covered with sauce made of nuts.",
    price: 7.99,
    imgsrc: sacivi,
  },
  {
    id: "m4",
    name: "Chkmeruli",
    description: "Chicken covered with a very delicious sauce.",
    price: 7.49,
    imgsrc: chkmeruli,
  },
  {
    id: "m5",
    name: "Adjarian Khachapuri",
    description:
      "Khachapuri in a form of boat with cheese and an egg in the middle.",
    price: 6.49,
    imgsrc: adjar,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      onShow={props.onShow}
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      imgsrc={meal.imgsrc}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
