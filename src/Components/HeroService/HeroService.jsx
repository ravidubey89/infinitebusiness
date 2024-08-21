import React from "react";
import "./HeroService.css";

const HeroService = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 600, // Scroll down by 100px
      left: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };
  return <div className="heroservice">
    <div className="hero_container">
      <h1>We understand that every business is different
      </h1>
      <a onClick={scrollDown}>Know More</a>

    </div>
  </div>;
};

export default HeroService;
