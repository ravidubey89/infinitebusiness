import React from "react";
import TestimonialsData from "./Data";
import "./Testimonials.css";
import { LuTarget } from "react-icons/lu";
const Testimonials = () => {
  const data = TestimonialsData;
  return (
    <div className="insight-row">
      <div className="container">
        <h2>Testimonials</h2>

        <div className="insight-flex">
          {data.service.map((item) => {
            return (
              <div className="insight">
                <strong>{item.heading}</strong>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
