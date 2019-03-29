import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card" id="card">
      <img  src={props.image} />
    </div>
  );
}

export default ImageCard;
