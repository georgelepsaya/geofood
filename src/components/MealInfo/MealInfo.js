import React from "react";
import Modal from "../UI/Modal";
import classes from "./MealInfo.module.css";

import khachapuri from "../../assets/khachapuri.jpg";
import khinkali from "../../assets/khinkali.jpg";
import adjar from "../../assets/adjar.jpg";
import sacivi from "../../assets/sacivi.jpg";
import chkmeruli from "../../assets/chkmeruli.jpg";

const MORE_INFO = [
  {
    id: "m1",
    name: "Khachapuri",
    description:
      "Absolutely delicious classic Georgian meal with finest cheese. Khachapuri is a traditional Georgian dish of cheese-filled bread. The bread is leavened and allowed to rise, molded into various shapes, and then filled in the center with a mixture of cheese (fresh or aged, most commonly, specialized Khachapuri cheese), eggs, and other ingredients. The bread crust is traditionally torn off and dipped into the cheese. It is very popular in Georgia, both in restaurants and as street food. As a Georgian staple food, the price of making khachapuri is used as a measure of inflation in different Georgian cities by the \"khachapuri index,\" developed by the International School of Economics at Tbilisi State University. It is Georgia's national dish that is inscribed on the list of the Intangible cultural heritage of Georgia. On the behalf and initiative of Gastronomic Association of Georgia, the 27th of February was announced as the National Khachapuri Day, to celebrate Georgia's timeless signature pastry as well as to promote its recognition internationally.",
    price: 9.49,
    imgsrc: khachapuri,
  },
  {
    id: "m2",
    name: "Khinkali",
    description:
      "The most popular Georgian food. Delicious meat covered with dough. Khinkali is eaten plain or with ground black pepper. The meat filling is uncooked when khinkali is assembled, so when it is cooked, the juices of the meat are trapped inside the dumpling. To make khinkali juicier, usually warm water or broth is added to the minced meat. Khinkali is typically consumed first by sucking the juices while taking the first bite, similar to xiaolongbao, in order to prevent the dumpling from bursting. The top, where the pleats meet, is tough, and is not supposed to be eaten, but discarded to the plate so that those eating can count how many they have consumed. In Georgia, this top is called the kudi (Georgian: კუდი, tail) or k'uch'i (Georgian: კუჭი, stomach).",
    price: 4.99,
    imgsrc: khinkali,
  },
  {
    id: "m3",
    name: "Satsivi",
    description:
      "Chicken covered with sauce made of nuts. Bazhe (Georgian: ბაჟე, baže) is the most versatile of Georgian walnut sauce more runny than satsivi sauce and often used for boiled or fried fish such as trout, made with either red wine vinegar or pomegranate juice. As is typical of the Georgian palate, this sauce is slightly tart, as sweeteners are not usually used by Georgians in their cooking.",
    price: 7.99,
    imgsrc: sacivi,
  },
  {
    id: "m4",
    name: "Chkmeruli",
    description:
      "Chicken covered with a very delicious sauce. Both sides of the chicken are fried and then is cooked over low heat for 20–25 minutes in the covered pan. When the chicken is done, it is placed in a plate and a little oil from the pan is added; garlic and nuts are simmered along with water in the remaining oil. After 5 minutes, the chicken is added to this mixture and heated before serving.",
    price: 7.49,
    imgsrc: chkmeruli,
  },
  {
    id: "m5",
    name: "Adjarian Khachapuri",
    description:
      "Khachapuri in a form of boat with cheese and an egg in the middle. A boat-shaped Khachapuri, with cheese, butter and egg yolk in the middle. It is thought to originate from the Lazi people, who were sailors. Khachapuri is a certain representation of the boat, sea and sun.",
    price: 6.49,
    imgsrc: adjar,
  },
];

const MealInfo = (props) => {
  const infoToShow = MORE_INFO.filter((meal) => meal.id === props.id)[0];
  return (
    <Modal onHide={props.onHide}>
      <div className={classes.name}>
        <span>{infoToShow.name}</span>
        <span>${infoToShow.price}</span>
      </div>
      <div className={classes.moreInfo}>
        <img src={infoToShow.imgsrc} className={classes.imageMeal} />
        <div className={classes.text}>{infoToShow.description}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default MealInfo;
