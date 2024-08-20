import React from "react";
import "./Hero.css";

const Hero = () => {
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
      {/* <p>At Infinite Epicenter, we’re dedicated to propelling businesses into their next phase of growth and innovation. With a blend of industry expertise and a commitment to excellence, we offer transformative solutions tailored to your unique needs.
      </p> */}
      <a onClick={scrollDown}>Know More</a>

    </div>
  </div>;
};

export default Hero;
