import React from 'react'
import TermsNCondition from '../Components/TermsNCondition/TermsNCondition'
import Navbar from "../Components/Navbar/Navbar";
// import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
import HeroService from '../Components/HeroService/HeroService';

const Terms = () => {
  return (

    <>
      <Navbar />
      <HeroService />
      <TermsNCondition />
      <Footer />
    </>
  )
}

export default Terms