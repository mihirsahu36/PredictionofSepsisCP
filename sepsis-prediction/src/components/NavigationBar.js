import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Sepsis Predictor</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/symptoms">Symptoms</Link></li>
          <li><Link to="/causes">Consequences</Link></li>
          <li><Link to="/treatment">Treatment</Link></li>
          <li><Link to="/precautions">Precautions</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/predict-sepsis">Predict Sepsis</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
