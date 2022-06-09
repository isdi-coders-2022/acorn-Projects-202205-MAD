import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NewMatch } from './newMatch';

describe('Given NewMatch page element', () => {
    describe('When calling it', () => {
        test('Then it should render its children', () => {
            render(
                <BrowserRouter>
                    <NewMatch />
                </BrowserRouter>
            );
            const element = screen.getByText(/CLIMA/);
            expect(element).toBeInTheDocument();
        });
    });
});
