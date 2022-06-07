import { render, screen } from '@testing-library/react';
import { Info } from './Home.Info';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Info />);
            const labelInput = screen.getByText(/sentir el cine/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
