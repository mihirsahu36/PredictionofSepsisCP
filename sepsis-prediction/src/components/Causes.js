import React from "react";
import Slider from "react-slick";
import Causes1 from "../images/Causes/Causes1.png";
import Causes2 from "../images/Causes/Causes2.jpeg";
import Causes3 from "../images/Causes/Causes3.jpeg";
import "../styles/Causes.css";

const Causes = () => {
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
    <div className="causes-container">
      {/* Title centered */}
      <h1 className="causes-title">Consequenses of Sepsis</h1>

      {/* Causes grid with subtitles and descriptions */}
      <div className="causes-grid">
        <div className="cause-item">
          <h2>Kidney Infection</h2>
          <p>
            A kidney infection occurs when bacteria spread to the kidneys, often causing fever, back pain, and frequent urination.
          </p>
          <a href="https://en.wikipedia.org/wiki/Kidney_infection" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>

        <div className="cause-item">
          <h2>Abdominal Infection</h2>
          <p>
            Abdominal infections, such as appendicitis or peritonitis, can lead to sepsis when bacteria spread from the abdominal cavity.
          </p>
          <a href="https://en.wikipedia.org/wiki/Abdominal_infection" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>

        <div className="cause-item">
          <h2>Meningitis</h2>
          <p>
            Meningitis is an infection of the protective membranes covering the brain and spinal cord, which can lead to sepsis if untreated.
          </p>
          <a href="https://en.wikipedia.org/wiki/Meningitis" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>

        <div className="cause-item">
          <h2>Cellulitis</h2>
          <p>
            Cellulitis is a bacterial skin infection that can spread to deeper tissues, leading to sepsis in severe cases.
          </p>
          <a href="https://en.wikipedia.org/wiki/Cellulitis" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>

        <div className="cause-item">
          <h2>Pneumonia</h2>
          <p>
            Pneumonia is an infection of the lungs that can spread to the bloodstream, leading to sepsis if not treated promptly.
          </p>
          <a href="https://en.wikipedia.org/wiki/Pneumonia" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>

        <div className="cause-item">
          <h2>Bloodstream Infection</h2>
          <p>
            Bloodstream infections (bacteremia) occur when bacteria enter the bloodstream, often leading to sepsis.
          </p>
          <a href="https://en.wikipedia.org/wiki/Bloodstream_infection" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
        </div>
      </div>

      {/* Image Slider below the grid */}
      <div className="causes-slider">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={Causes1} alt="Causes Image 1" className="causes-image" />
          </div>
          <div className="slider-item">
            <img src={Causes2} alt="Causes Image 2" className="causes-image" />
          </div>
          <div className="slider-item">
            <img src={Causes3} alt="Causes Image 3" className="causes-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Causes;
