import React from "react";
import "./Card.css";
// import "../../../assets/styles/transitionAnimations/leftRight/leftRight.css";
// import { CSSTransition } from "react-transition-group";
const Card = (props) => {
  return (
    <div id={props.id} className="form-card">
      {props.children}
    </div>
  );
};
export default Card;
