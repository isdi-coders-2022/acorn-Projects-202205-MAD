import LoginButton from './Login.LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export function Navigation() {
    const { isAuthenticated } = useAuth0();
    const template = (
        <>
            {isAuthenticated ? (
                <Link to="/playlist" className="favorite">
                    <img
                        src="/img/favorite.gif"
                        alt="Favoritos"
                        role="button"
                    />
                </Link>
            ) : (
                <LoginButton />
            )}
        </>
    );
    return template;
}
