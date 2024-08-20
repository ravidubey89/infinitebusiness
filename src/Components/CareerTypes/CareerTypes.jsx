import React from "react";
import CareerTypesData from "./Data";
import "./CareerTypes.css";
import { LuTarget } from "react-icons/lu";
const CareerTypes = () => {
  const data = CareerTypesData;
  return (
    <div className="insight-row">
      <div className="container">
        <h2>Insights</h2>

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

export default CareerTypes;
