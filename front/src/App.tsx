import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './Navbar/Navbar';
import { theme } from './theme';
import Home from './Pages/Home/Home';
import Audience from './Pages/Audience/Audience';

const CLIENT_ID = '1026926080882-g4hhc1f7kek176kolh4r0bi1v995aq23.apps.googleusercontent.com';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <BrowserRouter>
                        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f6f0'}}>
                            <Navbar />
                            <Routes>
                                <Route path='/audience' element={<Audience />} />
                                <Route path='/contact' element={<Home />} />
                                <Route path='/' element={<Home />}/>
                                <Route path='*' element={<Home />}/>
                            </Routes>
                            </div>
                </BrowserRouter>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default App;
