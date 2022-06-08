import { render, screen } from '@testing-library/react';
import { FilmDetails } from './Details.FilmDetails';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<FilmDetails id={1} />);
            const labelInput = screen.getByText(/Sinopsis/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
