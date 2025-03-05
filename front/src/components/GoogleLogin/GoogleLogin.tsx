import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';

const GoogleLogin = () => {
    const [isUserVerified, setIsUserVerified] = useState<boolean>(false);

    const getUserInfo = async (access_token: string) => {
        return await axios
            .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${access_token}` },
            })
            .then((res) => res.data);
    };

    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = getUserInfo(tokenResponse.access_token);
            // check if user is already exists and update user verify by that
            setIsUserVerified(false);
            console.log(userInfo);
        },
        flow: 'implicit',
    });

    return <button onClick={() => handleLogin()}>התחבר/י עם גוגל יגבר</button>;
};

export default GoogleLogin;
