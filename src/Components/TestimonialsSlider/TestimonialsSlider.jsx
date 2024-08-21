import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsSlider.css";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width at which this setting applies
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // screen width at which this setting applies
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // screen width at which this setting applies
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <div className='container'>
        <h2>Testimonials</h2>
          <Slider {...settings}>
              <div className='testimonialsDetails'>
                <h3>"Infinite Epicenter has been a game-changer for our business. Their strategic insights and hands-on approach have driven measurable growth. We couldn't be more satisfied with their consultancy services."</h3>
                <p>— Maria Thompson, CEO, Thompson Industries</p>
              </div>

              <div className='testimonialsDetails'>
                <h3>"Working with Infinite Epicenter was a turning point for our company. Their expertise in both IT and business consultancy provided us with innovative solutions that optimized our operations and increased profitability."</h3>
                <p>— David Ruiz, Managing Director, Ruiz Technologies</p>
              </div>

              <div className='testimonialsDetails'>
                <h3>"Infinite Epicenter’s team delivered exceptional results. They took the time to understand our unique challenges and provided tailored strategies that have had a lasting impact on our success."</h3>
                <p>— Sarah Lee, CFO, Greenline Enterprises</p>
              </div>

              <div className='testimonialsDetails'>
                <h3>"The consultants at Infinite Epicenter are true professionals. Their guidance has helped us navigate complex business challenges and emerge stronger than ever. We highly recommend their services."
                </h3>
                <p>— John Mitchell, Founder, Mitchell & Co.</p>
              </div>
              
            </Slider>
      </div>
    
  );
};

export default TestimonialsSlider;
