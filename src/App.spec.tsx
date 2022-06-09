import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App main component', () => {
    describe('When calling it', () => {
        test('Then it should render its children', () => {
            render(<App />);
            const labelInput = screen.getByText(/tardes de otoño /i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
