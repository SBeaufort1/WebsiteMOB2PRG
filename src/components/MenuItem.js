import React from "react";
import "../styles/Menu.css"

function MenuItem({name, price }) {
  return (
    <div className="menuItem">
      <div> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;