import React from 'react';
import {Link} from 'react-router-dom'
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Merbah Bakery Goods</h1>
        <img src="https://www.accessatlanta.com/resizer/Bah9O6VnTPGz3voRQp7U9MTSOw4=/1024x538/smart/cloudfront-us-east-1.images.arcpublishing.com/ajc/67CJDJRFP5EQ3HA6U4DKHZZHFA.jpg" className="center"/>
        <p> Enjoy our Menu of mouth watering treats
        </p>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Home;