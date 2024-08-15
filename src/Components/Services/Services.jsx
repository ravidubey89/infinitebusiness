import React from "react";
import ServiceData from "./Data";
import "./Services.css";

const Services = () => {
  const data = ServiceData;
  return (
    <div className="services-row">
      <div className="container">
        <h2>What We Do
        </h2>
        <h5 className='sub-heading'>Our Services
        </h5>
        <p>At Infinite Epicenter, we offer a suite of services designed to address your business’s most critical needs and drive meaningful results.
        </p>

        <div className="service-flex">
          {data.service.map((item) => {
            return (
              <div className="services">
                <span className="icons">{item.icon}</span>
                <strong>{item.heading}</strong>
                <p>{item.description}</p>
              </div>
            );
          })}

          <div className="service-footer-align">
            <h3>Why Infinite Epicenter?</h3>
            <ul>
              <li><strong>Tailored Solutions: </strong> We customize our services to fit your unique needs and objectives.</li>
              <li><strong>Data-Driven Approach: </strong> We leverage data and insights to guide our recommendations and strategies.</li>
              <li><strong>Collaborative Partnership: </strong> We work closely with you to ensure alignment and achieve your desired outcomes.</li>
            </ul>
            <span>Explore how our expertise can benefit your business. Get in Touch to learn more.
            </span>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Services;
