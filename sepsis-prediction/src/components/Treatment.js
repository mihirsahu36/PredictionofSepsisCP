import React from "react";
import Slider from "react-slick";
import Treatment1 from "../images/Treatment/Treatment1.png";  
import Treatment2 from "../images/Treatment/Treatment2.jpg";  
import Treatment3 from "../images/Treatment/Treatment3.webp";  
import "../styles/Treatment.css"; 

const Treatment = () => {
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
    <div className="treatment-container">
      {/* Title centered */}
      <h1 className="treatment-title">Treatment for Sepsis</h1>

      {/* Content with text on left and images on right */}
      <div className="treatment-content">
        <div className="treatment-text">
          <h2>Medication</h2>
          <p>
            Sepsis is typically treated with antibiotics to target the infection. The choice of antibiotics depends on the source and type of infection. It's important to start treatment as soon as possible to improve the chances of recovery.
          </p>
          
          <h2>Supportive Care</h2>
          <p>
            Supportive care includes measures to stabilize the patient's condition, such as fluid resuscitation to prevent shock, oxygen therapy, and other interventions to support the organs.
          </p>

          <h2>Surgery</h2>
          <p>
            In some cases, surgery may be required to remove infected tissue or drain abscesses. This is especially important if the infection is localized to a specific area, such as the abdominal cavity or lungs.
          </p>
        </div>

        {/* Right side: Image slider with stacked images */}
        <div className="treatment-slider">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={Treatment1} alt="Treatment Image 1" className="treatment-image" />
              <img src={Treatment2} alt="Treatment Image 2" className="treatment-image" />
            </div>
            <div className="slider-item">
              <img src={Treatment2} alt="Treatment Image 2" className="treatment-image" />
              <img src={Treatment3} alt="Treatment Image 3" className="treatment-image" />
            </div>
            <div className="slider-item">
              <img src={Treatment3} alt="Treatment Image 3" className="treatment-image" />
              <img src={Treatment1} alt="Treatment Image 1" className="treatment-image" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
