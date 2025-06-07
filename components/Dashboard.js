import React, { useEffect, useState } from "react";
import "./Form.css";

function Dashboard() {
  const [personal, setPersonal] = useState({});
  const [company, setCompany] = useState({});
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    setPersonal(JSON.parse(localStorage.getItem("personalInfo")) || {});
    setCompany(JSON.parse(localStorage.getItem("companyInfo")) || {});
    setPreferences(JSON.parse(localStorage.getItem("userPreferences")) || {});
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🎉 Onboarding Complete!</h2>

      <div className="info-sections">
        <div className="info-box">
          <h3>👤 Personal Info</h3>
          <p><strong>Name:</strong> {personal.name || "-"}</p>
          <p><strong>Email:</strong> {personal.email || "-"}</p>
        </div>

        <div className="info-box">
          <h3>🏢 Company Info</h3>
          <p><strong>Company:</strong> {company.company || "-"}</p>
          <p><strong>Industry:</strong> {company.industry || "-"}</p>
          <p><strong>Size:</strong> {company.size || "-"}</p>
        </div>

        <div className="info-box">
          <h3>⚙️ Preferences</h3>
          <p><strong>Theme:</strong> {preferences.theme || "-"}</p>
          <p><strong>Layout:</strong> {preferences.layout || "-"}</p>
        </div>
      </div>

      <div className="summary-cards">
        <div>
          <h4>👥 Team Members</h4>
          <p>12 Active</p>
        </div>
        <div>
          <h4>📁 Projects</h4>
          <p>5 Ongoing</p>
        </div>
        <div>
          <h4>🔔 Notifications</h4>
          <p>3 New</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
