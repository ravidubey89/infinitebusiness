import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import Mission from '../Components/Mission/Mission';
import CareerTypes from '../Components/CareerTypes/CareerTypes';
import ServicesHome from '../Components/ServicesHome/ServicesHome';
import HeroHome from '../Components/HeroHome/HeroHome';
import Testimonials from '../Components/Testimonials/Testimonials';
import TestimonialsSlider from '../Components/TestimonialsSlider/TestimonialsSlider';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <ServicesHome />
      {/* <Testimonials/> */}
      <TestimonialsSlider/>
      <CareerTypes />
      
      <Footer />


    </div>
  )
}

export default Home