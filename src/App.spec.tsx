import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Given App main component', () => {
    describe('When calling it', () => {
        test('Then it should render its children', () => {
            render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            );
            const labelInput = screen.getByText(/tardes de otoño /i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
