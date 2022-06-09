import { render, screen } from '@testing-library/react';
import { Navigation } from './All.Navigation';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Navigation />);
            const labelInput = screen.getByRole('link');
            expect(labelInput).toBeInTheDocument();
        });
    });
});
