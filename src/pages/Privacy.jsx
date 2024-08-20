import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
// import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import HeroService from '../Components/HeroService/HeroService';

const Privacy = () => {
  return (

    <>
      <Navbar />
      <HeroService />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default Privacy