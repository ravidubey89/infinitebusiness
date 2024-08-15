import React from "react";
import WhyChooseData from "./Data";
import "./WhyChoose.css";

const WhyChoose = () => {
  const data = WhyChooseData;
  return (
    <div className="services-row">
      <div className="container">
        <h2>Why Choose Infinite Epicenter?</h2>
        <div className="service-flex">
          {data.service.map((item) => {
            return (
              <div className="services">
                <a href={item.icon}></a>
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

export default WhyChoose;
