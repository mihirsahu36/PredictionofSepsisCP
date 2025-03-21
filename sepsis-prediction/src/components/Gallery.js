import React from "react";
import Slider from "react-slick";
import Gallery1 from "../images/Gallery/Gallery1.jpg";  
import Gallery2 from "../images/Gallery/Gallery2.webp";  
import Gallery3 from "../images/Gallery/Gallery3.jpg";  
import "../styles/Gallery.css";  

const Gallery = () => {
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
    <div className="gallery-container">
      {/* Title centered */}
      <h1 className="gallery-title">Gallery</h1>

      {/* Content with text on top */}
      <div className="gallery-text">
        <p>
          Welcome to our gallery! Below, you'll find a selection of images showcasing the most recent events and activities. These images reflect the beauty of our community and the impactful moments we've shared. Enjoy browsing through our visual collection.
        </p>
      </div>

      {/* Image slider below the text */}
      <div className="gallery-slider">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={Gallery1} alt="Gallery Image 1" className="gallery-image" />
          </div>
          <div className="slider-item">
            <img src={Gallery2} alt="Gallery Image 2" className="gallery-image" />
          </div>
          <div className="slider-item">
            <img src={Gallery3} alt="Gallery Image 3" className="gallery-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
