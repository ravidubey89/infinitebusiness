import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroService from '../Components/HeroService/HeroService';
import RefundPolicy from '../Components/RefundPolicy/RefundPolicy';

const Refund = () => {
  return (

    <>
      <Navbar />
      <HeroService />
      <RefundPolicy />
      <Footer />
    </>
  )
}

export default Refund