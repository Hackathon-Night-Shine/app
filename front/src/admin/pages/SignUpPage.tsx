import { useLocation } from 'react-router-dom';
import UserSignUp from '../../components/UserSignUp/UserSignUp';

const SignUpPage = () => {
    const location = useLocation();

    const userDetails = location.state;

    return (
        <>
            {!!userDetails && !userDetails?.isUserVerified && (
                <UserSignUp
                    email={userDetails.email}
                    firstName={userDetails.given_name}
                    lastName={userDetails.family_name}
                />
            )}
        </>
    );
};

export default SignUpPage;
