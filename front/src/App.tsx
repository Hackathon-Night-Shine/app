import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import { HomePage } from "./home";
import { RetreatManagementPage } from './admin/pages/RetreatManagementPage'
import { Audience } from './audience'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="background">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/idea" element={<HomePage />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/retreat" element={<RetreatManagementPage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
