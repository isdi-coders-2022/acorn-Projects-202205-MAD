import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import { Navigation } from './All.Navigation';

const user = {
    email: 'johndoe@me.com',
    email_verified: true,
    sub: 'google-oauth2|2147627834623744883746',
};

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Navigation />);
            const labelInput = screen.getByAltText(/login/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
    describe('When is authentificated', () => {
        // test('Then link rendered ', async () => {
        //     jest.mock('@auth0/auth0-react');
        //     (useAuth0 as jest.Mock).mockReturnValue({
        //         isAuthenticated: true,
        //         user,
        //         logout: jest.fn(),
        //         loginWithRedirect: jest.fn(),
        //     });
        //     render(<Navigation />);
        //     screen.debug();
        //     const labelInput = await screen.findByAltText(/favorite/i);
        //     expect(labelInput).toBeInTheDocument();
        // });
    });
});
