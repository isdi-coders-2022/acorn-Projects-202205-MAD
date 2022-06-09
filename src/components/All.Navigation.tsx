import LoginButton from './Login.LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

export function Navigation() {
    const { isAuthenticated } = useAuth0();
    const template = (
        <>
            {isAuthenticated ? (
                <a href="/playlist">Favoritos</a>
            ) : (
                <LoginButton />
            )}
        </>
    );
    return template;
}
