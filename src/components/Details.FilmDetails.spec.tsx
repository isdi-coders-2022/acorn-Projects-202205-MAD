import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { FilmDetails } from './Details.FilmDetails';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            const { id } = useParams();
            const idFilm = id as string;
            render(<FilmDetails idFilm={idFilm} />);
            const labelInput = screen.getByText(/Sinopsis/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
