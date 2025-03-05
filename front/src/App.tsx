import { CssBaseline, ThemeProvider } from "@mui/material";
import { DialogsProvider } from "@toolpad/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./admin/pages/Home";
import { RetreatManagementPage } from "./admin/pages/RetreatManagementPage";
import Layout from "./components/Layout";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="RetreatManagement"
                element={<RetreatManagementPage />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DialogsProvider>
    </ThemeProvider>
  );
}

export default App;
