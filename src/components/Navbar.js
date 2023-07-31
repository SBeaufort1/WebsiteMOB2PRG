import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {

  return (
    <div className = "Navbar">
    
        <Link to="/" className='HomeLink'>Home </Link>
        <Link to="/menu" className='MenuLink'>Menu </Link>
      
    </div>

  );
}

export default Navbar;