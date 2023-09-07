import React from 'react';
import {Link} from 'react-router-dom';
import HomePageImage from "../images/HomePageImage.jpg"
import "../styles/Home.css"


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomePageImage})` }}>
      <div className="headerContainer">
        <h1> Sinai's Recipes </h1>
        <p>Baking made easy </p>
        <Link to="/Recipes">
          <button> Search Recipes </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;