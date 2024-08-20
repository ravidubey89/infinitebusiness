import React from "react";
import TestimonialsData from "./Data";
import "./Testimonials.css";
import { LuTarget } from "react-icons/lu";
const Testimonials = () => {
  const data = TestimonialsData;
  return (
    <div className="testimonial-row">
      <div className="container">
        <h2>Testimonials</h2>

        <div className="testimonial-flex">
          {data.service.map((item) => {
            return (
              <div className="testimonial">
                
                <p>{item.description}</p>
                <strong>{item.heading}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
