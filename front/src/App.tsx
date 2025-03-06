import { CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./admin/pages/SignUpPage";
import footer from "./assets/logoUnderPhoto.png";
import { AboutTheRetreat } from "./components/aboutRetreat/retreat";
import GoogleLogin from "./Login/GoogleLogin/GoogleLogin";
import Navbar from "./Navbar/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import Audience from "./Pages/Audience/Audience";
import ContactForm from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import Idea from "./Pages/Idea/Idea";
import { RetreatManagementPage } from "./Pages/Retreats/RetreatsPage";
import CourseFeedbackForm from "./Pages/Survey/CourseFeedbackForm";
import { theme } from "./theme";
import { useState } from "react";

const CLIENT_ID =
  "1026926080882-g4hhc1f7kek176kolh4r0bi1v995aq23.apps.googleusercontent.com";

const queryClient = new QueryClient();

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <DialogsProvider>
            <CssBaseline />
            <BrowserRouter>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#f8f6f0",
                  direction: "rtl",
                }}
              >
                <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                <div style={{ height: "80%" }}>
                  <Routes>
                    <Route path="/auth" element={<GoogleLogin />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route
                      path="/retreats"
                      element={<RetreatManagementPage isAdmin={isAdmin} />}
                    />
                    <Route path="/audience" element={<Audience />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route
                      path="/about-retreat"
                      element={<AboutTheRetreat />}
                    />
                    <Route path="/survey" element={<CourseFeedbackForm />} />
                    <Route path="/idea" element={<Idea />} />
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
    </QueryClientProvider>
  );
};

export default App;
