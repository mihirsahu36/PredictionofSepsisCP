import React from "react";
import Slider from "react-slick";
import SymptomsImage1 from "../images/Symptoms/Symptoms1.png";  
import SymptomsImage2 from "../images/Symptoms/Symptoms2.png";  
import SymptomsImage3 from "../images/Symptoms/Symptoms3.png";  
import "../styles/Symptoms.css";  

const Symptoms = () => {
  const settings = {
    dots: true,  
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>, // Left arrow
    nextArrow: <button className="slick-next"></button>, // Right arrow
  };

  return (
    <div className="symptoms-container">
      {/* Title centered */}
      <h1 className="symptoms-title">Symptoms of Sepsis</h1>

      {/* Content with text on left and images on right */}
      <div className="symptoms-content">
        <div className="symptoms-text">
          <h2>Common Symptoms</h2>
          <p>
            Sepsis is a life-threatening condition caused by an infection. It can lead to a range of symptoms, including:
          </p>
          <ul>
            <li>Fever or low body temperature</li>
            <li>Rapid heart rate (tachycardia)</li>
            <li>Confusion or disorientation</li>
            <li>Shortness of breath</li>
            <li>Chills and shivering</li>
            <li>Extreme pain or discomfort</li>
            <li>Clammy or sweaty skin</li>
          </ul>

          <h2>Early Detection</h2>
          <p>
            Early detection and prompt treatment of sepsis are crucial. If you notice any of these symptoms, seek medical help immediately.
          </p>
        </div>

        {/* Right side: Image slider with stacked images */}
        <div className="symptoms-slider">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={SymptomsImage1} alt="Symptoms Image 1" className="symptoms-image" />
              <img src={SymptomsImage2} alt="Symptoms Image 2" className="symptoms-image" />
            </div>
            <div className="slider-item">
              <img src={SymptomsImage2} alt="Symptoms Image 2" className="symptoms-image" />
              <img src={SymptomsImage3} alt="Symptoms Image 3" className="symptoms-image" />
            </div>
            <div className="slider-item">
              <img src={SymptomsImage3} alt="Symptoms Image 3" className="symptoms-image" />
              <img src={SymptomsImage1} alt="Symptoms Image 1" className="symptoms-image" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
