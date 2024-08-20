import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import Mission from '../Components/Mission/Mission';
import CareerTypes from '../Components/CareerTypes/CareerTypes';
import ServicesHome from '../Components/ServicesHome/ServicesHome';
import HeroHome from '../Components/HeroHome/HeroHome';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <ServicesHome />
      <CareerTypes />
      <Footer />


    </div>
  )
}

export default Home