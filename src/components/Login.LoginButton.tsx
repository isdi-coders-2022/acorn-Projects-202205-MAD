import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>
            <img src="/img/login.png" alt="login" role="button" />
        </button>
    );
};

export default LoginButton;
