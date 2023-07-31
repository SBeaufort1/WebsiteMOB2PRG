import React from 'react';
import {Link} from 'react-router-dom'
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Merbia Bakery</h1>
        
        <p> Enjoy our endless sweets </p>
        <img src="https://cdn.vectorstock.com/i/1000x1000/18/02/flat-bakery-vector-46761802.webp" className="center"/>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Home;