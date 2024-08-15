import React from 'react'
import "./ContactUs.css"

import { FaLocationArrow } from "react-icons/fa";
import { MdMarkEmailRead } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';


const ContactUs = () => {
  return (
    <div className='contact-row'>
      <div className='contactHero'>
        <h1>CONNECT TO THE FUTURE OF COMMUNICATION</h1>
      </div>
      <div className='container'>
        <h2>CONTACT US</h2>
        <h5 className='sub-heading'>Get in Touch with Infinite Epicenter
        </h5>
        <p>We’re here to answer your questions and discuss how we can assist with your business needs. Reach out to us via the contact details below or fill out the form to schedule a consultation.</p>
        <div className='contact-flex'>
          <div className='contact-details'>
            <FaLocationArrow />
            <strong>Address</strong>
            <p>
              534 Mono St Manteca CA 95337
            </p>
          </div>
          <div className='contact-details'>
            <MdMarkEmailRead />
            <strong>Email</strong>
            <a href='mailto:support@infiniteepicenter.com'>support@infiniteepicenter.com</a>
          </div>
          <div className='contact-details'>
            <IoCallSharp />
            <strong>Contact Number</strong>
            <p>
              2092173571
            </p>
          </div>
        </div>
        <h6 className='mt-3'>
          Monday to Friday: 9:00 AM - 6:00 PM <br />
          Saturday: By Appointment<br />
          Sunday: Closed

        </h6>
        <p>Thank you for considering Infinite Epicenter. We look forward to the opportunity to work with you and drive your business forward!
        </p>
      </div>
    </div>
  )
}

export default ContactUs