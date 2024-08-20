import React from "react";
import "./HeroHome.css";

const HeroHome = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 400, // Scroll down by 100px
      left: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };
  return <div className="hero">
    <div className="hero_container">
      <h1>We understand that every business is different
      </h1>
      <a onClick={scrollDown}>Know More</a>

    </div>
  </div>;
};

export default HeroHome;
