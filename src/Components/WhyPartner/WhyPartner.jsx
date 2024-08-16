import React from "react";
import WhyPartnerData from "./Data";
import "./WhyPartner.css";

const WhyPartner = () => {
  const data = WhyPartnerData;
  return (
    <div className="services-row">
      <div className="container">
        {/* <h2>Why Partner with Infinite Epicenter?</h2> */}

        <div className="service-flex">
          {data.service.map((item) => {
            return (
              <div className="services">

                <img
                  src={item.icon}
                  alt="Picture of the author"
                />
                <div className="service_space">
                  <strong>{item.heading}</strong>
                  <p>{item.description}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
