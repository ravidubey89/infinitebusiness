import React from "react";
import CareerTypesData from "./Data";
import "./CareerTypes.css";
import { LuTarget } from "react-icons/lu";
const CareerTypes = () => {
  const data = CareerTypesData;
  return (
    <div className="services-row">
      <div className="container">
        <h2>Types of Carriers We Work With</h2>

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

export default CareerTypes;
