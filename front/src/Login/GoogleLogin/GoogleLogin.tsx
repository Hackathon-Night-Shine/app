import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUserAtom } from "../../jotai/CurrentUser";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const setCurrentUser = useSetAtom(currentUserAtom);
  const [_userDetails, setUserDetails] = useState<any | undefined>(undefined);

  const getUserInfo = async (access_token: string) => {
    return await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => res.data);
  };

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await getUserInfo(tokenResponse.access_token);

      try {
        const user = await axios.get(
          `http://localhost:443/api/users?email=${userInfo.email}`
        );
        console.log(user);
        setCurrentUser(user.data);
        navigate("/");
      } catch {
        navigate("/signUp", { state: userInfo });
      }
    },
    flow: "implicit",
  });

  return <Button onClick={() => handleLogin()}>התחברו עם גוגל</Button>;
};

export default GoogleLogin;
