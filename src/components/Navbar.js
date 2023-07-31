import React from 'react'
import Logo from  "../assets/pizzaLogo.png";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className = "Navbar">
      <div className= "leftSide">
       <img src = {Logo} />
      </div>
      <div className= "rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menue</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </div>
  );
}

export default Navbar;