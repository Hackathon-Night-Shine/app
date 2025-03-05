import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import Layout from './components/Layout'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { theme } from "./theme";

import { HomePage } from "./home";
import { RetreatManagementPage } from './admin/pages/RetreatManagementPage'
import { Audience } from './audience'
import Home from "./admin/pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <div className="background">
          <Routes>
            <Route path="/manegerHome" element={<Home />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/idea" element={<HomePage />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/retreat" element={<RetreatManagementPage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider >
  );
}


export default App
