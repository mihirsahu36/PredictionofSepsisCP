import React, { useState } from "react";
import axios from "axios";
import "../styles/PredictSepsis.css";  // Import the CSS file for styling

const PredictSepsis = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sofaScore, setSofaScore] = useState(null);

  const redirectToWikipedia = () => {
    window.open("https://en.wikipedia.org/wiki/Sepsis", "_blank"); 
  };

  const sepsisCalculate = () => {
    window.open("http://127.0.0.1:5000", "_blank"); 
  };


  


  const handleStartPrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/predict-sepsis/run");
      setMessage(response.data.message);
      setSofaScore(response.data.sofaScore);  // Assuming response contains sofaScore
    } catch (error) {
      setError("Error starting prediction: " + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="predict-sepsis-wrapper">
      {/* Title outside the image container */}
      <h2 className="predict-sepsis-title">Sepsis Prediction</h2>

      {/* Image container */}
      <div className="predict-sepsis-container">
        {/* Content section with buttons */}
        <div className="predict-sepsis-content">
          <button className="predict-sepsis-button" onClick={sepsisCalculate}>
            Start Sepsis Prediction
          </button>

          <div className="button-container">
            <button onClick={redirectToWikipedia} className="secondary-button">Know More</button>
          </div>
        </div>
      </div>

      {/* Displaying SOFA Score */}
      {sofaScore !== null && (
        <div className="sofa-score">
          <h3>Get Well Soon!!!</h3>
        </div>
      )}

      {/* Displaying status */}
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PredictSepsis;
