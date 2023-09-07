import React from "react"
import AboutUsImage3 from "../images/AboutUsImage3.jpg"
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutUsImage3})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Sinai's Bakery, we're on a quest to redefine the very essence of baking. Founded by two sisters on their Journey to create sweet treats for people to enjoy, our bakery is a whimsical realm where flour and sugar come to life. Here's a playful glimpse into our fantastical world.
<div>
        Our Promise: While we may be rooted in the whimsical and unreal, we're committed to providing you the best recipes that taste of sheer delight. Our mission is to spark imaginations and satisfy your sweetest dreams, one fantastical treat at a time.
</div>

<div>
        So, whether you're a fellow dreamer or a lover of the absurd, come join us at Imaginary Delights Bakery for a slice of the surreal. Remember, here, the only thing we take seriously is our passion for the fantastical world of baking!
</div>   


        </p>
      </div>
    </div>
  );
}

export default About;