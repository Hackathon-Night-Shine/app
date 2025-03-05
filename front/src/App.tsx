// App.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import { theme } from './theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './admin/pages/Home';
import { RetreatManagementPage } from './admin/pages/RetreatManagementPage';
import SignUpPage from './admin/pages/SignUpPage';
import './App.css';
import { Audience } from './components/audience';
import GoogleLogin from './components/GoogleLogin/GoogleLogin';
import { HomePage } from './components/home';
import GoogleCalendar from './components/Calander/calander';

const CLIENT_ID = '1026926080882-g4hhc1f7kek176kolh4r0bi1v995aq23.apps.googleusercontent.com';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Navbar />
                    <div className="background">
                        <Routes>
                            <Route path='/auth' element={<GoogleLogin />} />
                            <Route path='/signUp' element={<SignUpPage />} />
                            <Route path='/manegerHome' element={<Home />} />
                            <Route path='/home' element={<HomePage />} />
                            <Route path='/idea' element={<HomePage />} />
                            <Route path='/audience' element={<Audience />} />
                            <Route path='/retreat' element={<RetreatManagementPage />} />
                            <Route path='/about' element={<HomePage />} />
                            <Route path='/contact' element={<HomePage />} />
                            <Route path='/calander' element={<GoogleCalendar />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default App;
