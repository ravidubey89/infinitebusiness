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

          <div className="why_choose_flex">
            <div className="why_choose_image">
              <img src="/our-mission.jpg" />
            </div>
            <div className="why_choose">
              <h4>Our Mission</h4>
              <p>
                "At Infinite Epicenter, our mission is simple: to empower businesses to reach their full potential. We believe in creating value for our clients by delivering innovative solutions that are both effective and sustainable."

              </p>
            </div>
          </div>

          <div className="why_choose_flex">

            <div className="why_choose">
              <h4>Our Story</h4>
              <p>
                "Infinite Epicenter was founded on the belief that every business deserves access to top-tier consultancy services. Our journey began [X years ago] when our founders recognized a gap in the market for high-quality, personalized business consulting. Today, we’ve grown into a trusted partner for businesses across various industries."

              </p>
            </div>
            <div className="why_choose_image">
              <img src="/operation-efficiency.jpg" />
            </div>
          </div>

          <div className="why_choose_flex">
            <div className="why_choose_image">
              <img src="/core-values.jpg" />
            </div>
            <div className="why_choose">
              <h4>Our Values</h4>
              <p>We are guided by a set of core values that define who we are and how we operate:
              </p>
              <ul>
                <li><strong>Integrity:  </strong> We conduct our business with honesty and transparency.</li>
                <li><strong>Innovation:  </strong> We embrace change and constantly seek new ways to improve.</li>
                <li><strong>Excellence:  </strong> We strive for the highest standards in everything we do.</li>
                <li><strong>Collaboration:  </strong> We believe that teamwork and partnership are key to success.</li>
              </ul>
            </div>
          </div>

          <div className="why_choose_flex">

            <div className="why_choose">
              <h4>Our Team</h4>
              <p>
                "Our team is our greatest asset. Comprised of industry experts with years of experience, each member of Infinite Epicenter brings a wealth of knowledge and a unique perspective to the table. We are passionate about what we do, and we are committed to delivering results that exceed your expectations."

              </p>
            </div>
            <div className="why_choose_image">
              <img src="/our-team.jpg" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
