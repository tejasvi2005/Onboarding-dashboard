import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function CompanyInfo() {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");

  const handleNext = () => {
    if (!company || !industry || !size) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate company name length
    if (company.trim().length < 2) {
      alert("Please enter a valid company name (at least 2 characters).");
      return;
    }

    localStorage.setItem(
      "companyInfo",
      JSON.stringify({ company: company.trim(), industry, size })
    );
    navigate("/preferences");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Step 2: Company Info</h2>

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          value={company}
          placeholder="e.g. Tech Solutions Pvt Ltd"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Industry</label>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="">Select Industry</option>
          <option value="Technology">Technology</option>
          <option value="Software Development">Software Development</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Finance">Finance</option>
          <option value="Banking">Banking</option>
          <option value="Insurance">Insurance</option>
          <option value="Retail">Retail</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Automotive">Automotive</option>
          <option value="Construction">Construction</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Transportation">Transportation</option>
          <option value="Logistics">Logistics</option>
          <option value="Telecommunications">Telecommunications</option>
          <option value="Media & Entertainment">Media & Entertainment</option>
          <option value="Marketing & Advertising">Marketing & Advertising</option>
          <option value="Consulting">Consulting</option>
          <option value="Legal Services">Legal Services</option>
          <option value="Accounting">Accounting</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Non-Profit">Non-Profit</option>
          <option value="Government">Government</option>
          <option value="Energy">Energy</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Pharmaceuticals">Pharmaceuticals</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Aerospace">Aerospace</option>
          <option value="Fashion">Fashion</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Gaming">Gaming</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Company Size</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="201-500">201–500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={handleBack} className="back-button">Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default CompanyInfo;