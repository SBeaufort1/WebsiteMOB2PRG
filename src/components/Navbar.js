import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {

  return (
    <div className = "Navbar">
      <div className= "leftSide">
      <div className= "rightSide">
      </div>
        <Link to="/" className='HomeLink'>Home </Link>
        <Link to="/menu" className='MenuLink'>Menu </Link>
      </div>
    </div>

  );
}

export default Navbar;