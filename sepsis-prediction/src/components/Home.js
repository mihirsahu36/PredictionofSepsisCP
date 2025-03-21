import React from "react";
import { Link } from "react-router-dom";  
import Home1 from "../images/Home/Home1.png";  
import "../styles/Home.css";  

const Home = () => {

  const redirectToWikipedia = () => {
    window.open("https://en.wikipedia.org/wiki/Sepsis", "_blank"); 
  };

  return (
    <div className="home-container">
      {/* Title centered */}
      <h1 className="home-title">Welcome to Sepsis Awareness</h1>

      {/* Content with description on the left and image on the right */}
      <div className="home-content">
        {/* Left side: Description with buttons */}
        <div className="home-text">
          <p>
            Sepsis is a life-threatening condition caused by the body’s response to an infection. If not treated quickly, it can lead to organ failure, tissue damage, and even death. It is critical to recognize the symptoms early and get treatment immediately.
          </p>
          <p>
            Sepsis can arise from various infections, such as pneumonia, urinary tract infections, or infections caused by injuries. Early treatment can prevent severe complications. Understanding the symptoms and getting medical help on time can save lives.
          </p>
          <div className="button-container">
            {/* Know More Button */}
            <button onClick={redirectToWikipedia} className="know-more-button">
              Know More
            </button>

            {/* Predict Sepsis Button using Link component */}
            <Link to="/predict-sepsis">
              <button className="predict-sepsis-button">
                Predict Sepsis
              </button>
            </Link>
          </div>
        </div>

        {/* Right side: Home1 image */}
        <div className="home-image">
          <img src={Home1} alt="Sepsis Awareness" className="home1-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
