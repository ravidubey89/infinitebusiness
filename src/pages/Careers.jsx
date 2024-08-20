import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Careers from '../Components/Careers/Careers';
import WhyPartner from '../Components/WhyPartner/WhyPartner';
import CareerTypes from '../Components/CareerTypes/CareerTypes';
import OurCommitment from '../Components/OurCommitment/OurCommitment';
import HeroWhoWeAre from '../Components/HeroWhoWeAre/HeroWhoWeAre';


const Product = () => {
  return (
    <div>
      <Navbar />
      <HeroWhoWeAre />
      <Careers />
      <WhyPartner />
      <CareerTypes />
      {/* <OurCommitment /> */}
      <Footer />

    </div>
  )
}

export default Product