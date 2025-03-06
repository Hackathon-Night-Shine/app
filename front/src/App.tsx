import { CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import footer from "./assets/logoUnderPhoto.png";
import Navbar from "./Navbar/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import Audience from "./Pages/Audience/Audience";
import Home from "./Pages/Home/Home";
import Idea from "./Pages/Idea/Idea";
import ContactForm from "./Pages/Contact";
import { RetreatManagementPage } from "./Pages/Retreats/RetreatManagementPage";
import { theme } from "./theme";
import { AboutTheRetreat } from "./components/aboutRetreat/retreat";
import CourseFeedbackForm from "./Pages/Survey/CourseFeedbackForm";

const CLIENT_ID =
  "1026926080882-g4hhc1f7kek176kolh4r0bi1v995aq23.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <DialogsProvider>
          <CssBaseline />
          <BrowserRouter>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f8f6f0",
                direction: "rtl",
              }}
            >
              <Navbar />
              <div style={{ height: "80%" }}>
                <Routes>
                  <Route path="/retreats" element={<RetreatManagementPage />} />
                  <Route path="/audience" element={<Audience />} />
                  <Route path="/contact" element={<ContactForm />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/about-retreat" element={<AboutTheRetreat />} />
                  <Route path="/idea" element={<Idea />} />
                  <Route path="/survey" element={<CourseFeedbackForm />} />
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Home />} />
                </Routes>
                <img src={footer} style={{ width: "100%" }} />
              </div>
            </div>
          </BrowserRouter>
        </DialogsProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
