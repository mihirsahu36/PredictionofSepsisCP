import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Introduction from "./components/Introduction";
import Symptoms from "./components/Symptoms";
import Causes from "./components/Causes";
import Treatment from "./components/Treatment";
import Precautions from "./components/Precautions";
import Gallery from "./components/Gallery";
import PredictSepsis from "./components/PredictSepsis";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/precautions" element={<Precautions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/predict-sepsis" element={<PredictSepsis />} />
      </Routes>
    </Router>
  );
}

export default App;
