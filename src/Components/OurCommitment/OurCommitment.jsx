import React from "react";
import ProductData from "./Data"
import "./OurCommitment.css";
import { Link } from "react-router-dom";

const OurCommitment = () => {
  const data = ProductData;
  return (
    <div className="career-row-align">
      <div className="container">
        <h3>Our Core Values:
        </h3>
        <ul>
          <li><strong>Integrity: </strong> We operate with honesty and transparency in all our interactions. </li>
          <li><strong>Excellence: </strong> We pursue excellence in every aspect of our work. </li>
          <li><strong>Innovation: </strong> We embrace forward-thinking solutions to tackle today’s challenges. </li>
          <li><strong>Client Focus: </strong> We prioritize your needs and goals in every strategy we develop. </li>
        </ul>
        <p>Discover more about our team and their expertise. Meet the Team
        </p>

      </div>
    </div>
  );
};

export default OurCommitment;
