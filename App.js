import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import CompanyInfo from "./components/CompanyInfo";
import UserPreferences from "./components/UserPreferences";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/company" element={<CompanyInfo />} />
        <Route path="/preferences" element={<UserPreferences />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
