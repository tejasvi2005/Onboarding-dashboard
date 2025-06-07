import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function PersonalInfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleNext = () => {
    // Check if fields are empty
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }
    if (name.trim().length < 2) {
      alert("Please enter a valid name (at least 2 characters).");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("personalInfo", JSON.stringify({ name: name.trim(), email }));
    navigate("/company");
  };

  return (
    <div className="form-container">
      <h2>Step 1: Personal Information</h2>
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalInfo;
