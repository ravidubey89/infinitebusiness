import React from "react";
import "./HeroWhoWeAre.css";

const HeroWhoWeAre = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 400, // Scroll down by 100px
      left: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };
  return <div className="herowhoweare">
    <div className="hero_container">
      <h1>We understand that every business is different
      </h1>
      <a onClick={scrollDown}>Know More</a>

    </div>
  </div>;
};

export default HeroWhoWeAre;
