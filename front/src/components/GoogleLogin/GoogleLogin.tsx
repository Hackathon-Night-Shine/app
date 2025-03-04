import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate();

    const [_userDetails, setUserDetails] = useState<any | undefined>(undefined);

    const getUserInfo = async (access_token: string) => {
        return await axios
            .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${access_token}` },
            })
            .then((res) => res.data);
    };

    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await getUserInfo(tokenResponse.access_token);

            // check if user is already exists and update user verify by that

            setUserDetails({ ...userInfo, isUserVerified: false });
            console.log(userInfo);

            navigate('/signUp', { state: userInfo });
        },
        flow: 'implicit',
    });

    return (
        <>
            <button onClick={() => handleLogin()}>התחבר/י עם גוגל יגבר</button>
        </>
    );
};

export default GoogleLogin;
