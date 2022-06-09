import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('Given Home page component', () => {
    describe('When calling it', () => {
        test('It should render its children', () => {
            render(<Home />);
            const labelInput = screen.getByText(/tardes de otoño /i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
