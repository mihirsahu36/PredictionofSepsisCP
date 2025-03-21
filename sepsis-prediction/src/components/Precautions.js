import React from "react";
import Slider from "react-slick";
import Precautions1 from "../images/Precautions/Precautions1.jpg";  
import Precautions2 from "../images/Precautions/Precautions2.webp";  
import Precautions3 from "../images/Precautions/Precautions3.webp"; 
import "../styles/Precautions.css";  

const Precautions = () => {
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
    <div className="precautions-container">
      {/* Title centered */}
      <h1 className="precautions-title">Precautions to Prevent Sepsis</h1>

      {/* Precautions grid with subtitles and descriptions */}
      <div className="precautions-grid">
        <div className="precaution-item">
          <h2>Prevention of Infections</h2>
          <p>
            Preventing infections is the most effective way to reduce the risk of sepsis. This includes practices like proper wound care and vaccination.
          </p>
        </div>

        <div className="precaution-item">
          <h2>Importance of Hygiene</h2>
          <p>
            Regular hand washing and keeping the body clean can reduce the risk of infection, which could lead to sepsis.
          </p>
        </div>

        <div className="precaution-item">
          <h2>Vaccination</h2>
          <p>
            Getting vaccinated against pneumonia, influenza, and other infections can lower the risk of sepsis.
          </p>
        </div>

        <div className="precaution-item">
          <h2>Healthy Lifestyle</h2>
          <p>
            Maintaining a healthy lifestyle by eating nutritious foods and exercising helps the immune system to fight infections effectively.
          </p>
        </div>

        <div className="precaution-item">
          <h2>Early Medical Attention</h2>
          <p>
            Seeking prompt medical care for persistent infections can prevent the development of sepsis.
          </p>
        </div>

        <div className="precaution-item">
          <h2>Proper Care for Chronic Conditions</h2>
          <p>
            People with chronic conditions like diabetes or heart disease need to manage their health properly to avoid infections and complications.
          </p>
        </div>
      </div>

      {/* Image Slider below the grid */}
      <div className="precautions-slider">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={Precautions1} alt="Precautions Image 1" className="precautions-image" />
          </div>
          <div className="slider-item">
            <img src={Precautions2} alt="Precautions Image 2" className="precautions-image" />
          </div>
          <div className="slider-item">
            <img src={Precautions3} alt="Precautions Image 3" className="precautions-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Precautions;
