import React from "react";

function MenuItem({image,name, Recipe}) {
  return (
    <div className="menuItem">
      <div> 
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      </div>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;