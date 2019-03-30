import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div onClick={() => props.clickImage(props.id, props.clicked)} className="card" data-id={props.clicked} id="card">
      <img  src={props.image} />
    </div>
  );
}

export default ImageCard;
