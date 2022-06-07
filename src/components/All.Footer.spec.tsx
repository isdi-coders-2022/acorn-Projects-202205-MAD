import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './All.Footer';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            );
            const labelInput = screen.getByText(/adrian calero/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
