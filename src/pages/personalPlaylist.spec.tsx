import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { PersonalPlaylist } from './personalPlaylist';

describe('Given the PersonalPlaylist page component', () => {
    describe('When calling it', () => {
        test('It should render its children', () => {
            render(
                <BrowserRouter>
                    <PersonalPlaylist />
                </BrowserRouter>
            );
            const test1 = screen.getByRole('combobox');
            expect(test1).toBeInTheDocument();
        });
    });
});
