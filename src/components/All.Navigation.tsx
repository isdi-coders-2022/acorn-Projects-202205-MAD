import LoginButton from './Login.LoginButton';

export function Navigation() {
    const template = (
        <>
            <LoginButton />
            <a href="/playlist">Favoritos</a>;
        </>
    );
    return template;
}
