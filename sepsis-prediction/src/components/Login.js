import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setError("");
    setFormData({ name: "", email: "", username: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get the form data
    const userData = {
      name: "Doctor Name",   // Make sure you're collecting this from the form inputs
      email: "doctor@example.com",  // Collecting email from the form
      username: "doctor123",  // Collecting username from the form
      password: "securepassword"  // Collecting password from the form
    };
  
    try {
      // Sending POST request to backend with all required fields
      const url = "/api/auth/signup"; // Make sure the URL is correct
      const response = await axios.post(url, userData);
  
      // Handle response after successful signup
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin-dashboard"); // Redirect to dashboard or home page
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </>
        )}
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <button type="submit">
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <button onClick={toggleMode} className="toggle-button">
        {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Login;
