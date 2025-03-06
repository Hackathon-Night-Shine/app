import { useLocation } from 'react-router-dom';
import UserSignUp from '../../Login/UserSignUp/UserSignUp';

const SignUpPage = () => {
    const location = useLocation();

    const userDetails = location.state;

    return (
        <div>
            {!!userDetails && !userDetails?.isUserVerified && (
                <UserSignUp
                    email={userDetails.email}
                    firstName={userDetails.given_name}
                    lastName={userDetails.family_name}
                />
            )}
        </div>
    );
};

export default SignUpPage;
