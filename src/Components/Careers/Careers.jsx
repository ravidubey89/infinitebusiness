import React from "react";
import ProductData from "./Data"
import "./Careers.css";
import { Link } from "react-router-dom";

const Careers = () => {
  const data = ProductData;
  return (
    <div className="career-row">
      <div className="container">
        <h2>Who We Are
        </h2>
        <h5 className='sub-heading'>About Infinite Epicenter

        </h5>
        <p>Infinite Epicenter is a premier business consultancy firm committed to unlocking your business’s potential. Founded on principles of integrity, innovation, and excellence, we partner with you to navigate complex business landscapes and achieve sustainable growth.
        </p>

      </div>
    </div>
  );
};

export default Careers;
