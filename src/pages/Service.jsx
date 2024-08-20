import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";
import CareerTypes from '../Components/CareerTypes/CareerTypes';
import Footer from "../Components/Footer/Footer";
import HeroService from '../Components/HeroService/HeroService';


const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroService />
      <Services />
      <CareerTypes />
      <Footer />
    </div>
  )
}

export default Service