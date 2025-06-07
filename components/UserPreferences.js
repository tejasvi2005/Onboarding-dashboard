import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function UserPreferences() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [layout, setLayout] = useState("");

  const handleSubmit = () => {
    if (!theme || !layout) {
      alert("Please choose both preferences.");
      return;
    }

    localStorage.setItem("userPreferences", JSON.stringify({ theme, layout }));
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/company");
  };

  return (
    <div className="form-container">
      <h2>Step 3: Preferences</h2>

      <div className="form-group">
        <label>Preferred Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="">Select Theme</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      <div className="form-group">
        <label>Dashboard Layout</label>
        <select value={layout} onChange={(e) => setLayout(e.target.value)}>
          <option value="">Select Layout</option>
          <option value="Grid">Grid</option>
          <option value="List">List</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={handleBack} className="back-button">Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default UserPreferences;
