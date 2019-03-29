import React from "react";
import "./style.css";

function CardWrapper(props) {
  return <div className="container" ><div className="cardWrapper">{props.children}</div></div>;
}

export default CardWrapper;