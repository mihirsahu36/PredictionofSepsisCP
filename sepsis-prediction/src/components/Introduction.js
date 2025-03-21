import React from "react";
import Slider from "react-slick";
import SepsisImage1 from "../images/Introduction/Introduction1.jpg"; 
import SepsisImage2 from "../images/Introduction/Introduction2.jpg";  
import SepsisImage3 from "../images/Introduction/Introduction3.jpg";  
import "../styles/Introduction.css"; 

const Introduction = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">←</button>, // Left arrow
    nextArrow: <button className="slick-next">→</button>, // Right arrow
  };

  const redirectToWikipedia = () => {
    window.open("https://en.wikipedia.org/wiki/Sepsis", "_blank");  
  };

  return (
    <div className="introduction-container">
      {/* Title centered */}
      <h1 className="introduction-title">What is Sepsis?</h1>

      {/* Content with description on the left and image slider on the right */}
      <div className="introduction-content">
        {/* Left side: Sepsis description */}
        <div className="introduction-text">
          <p>
            Sepsis is a life-threatening condition that occurs when the body’s response to an infection causes widespread inflammation. It can lead to tissue damage, organ failure, and even death if not treated promptly. Sepsis occurs when chemicals released into the bloodstream to fight an infection trigger an inflammatory response throughout the body.
          </p>
          <p>
            Early diagnosis and treatment of sepsis are crucial for reducing the risk of severe complications. It can occur as a result of infections like pneumonia, urinary tract infections, or infections from injuries or surgeries. Symptoms of sepsis can include fever, confusion, rapid heart rate, and difficulty breathing.
          </p>
          <p>
            Sepsis is most common in older adults, pregnant women, children, and those with weakened immune systems, but it can affect anyone.
          </p>
          <button onClick={redirectToWikipedia} className="know-more-button">
            Know More
          </button>
        </div>

        {/* Right side: Image slider with two images per slide */}
        <div className="introduction-slider">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={SepsisImage1} alt="Sepsis Image 1" className="introduction-image" />
              <img src={SepsisImage2} alt="Sepsis Image 2" className="introduction-image" />
            </div>
            <div className="slider-item">
              <img src={SepsisImage2} alt="Sepsis Image 2" className="introduction-image" />
              <img src={SepsisImage3} alt="Sepsis Image 3" className="introduction-image" />
            </div>
            <div className="slider-item">
              <img src={SepsisImage3} alt="Sepsis Image 3" className="introduction-image" />
              <img src={SepsisImage1} alt="Sepsis Image 1" className="introduction-image" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
