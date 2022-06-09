import { render, screen } from '@testing-library/react';
import { iFilm, iVideo } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';
import { Details } from './details';

jest.mock('../services/films.http.store');
const film1: iFilm = {
    id: 0,
    overview: 'test',
    poster_path: 'test',
    release_date: 'test',
    title: 'test title',
    vote_average: 0,
};
const video1: iVideo = {
    id: 0,
    results: [{ key: 'test', type: 'test' }],
};

describe('Given Details page element', () => {
    beforeEach(() => {
        FilmHttpStore.prototype.getFilm = jest.fn().mockResolvedValue(film1);
        FilmHttpStore.prototype.getVideo = jest.fn().mockResolvedValue(video1);
    });
    describe('When calling it', () => {
        test('Then it should render', () => {
            render(<Details />);
            const test1 = screen.getByText(/estreno/i);
            expect(test1).toBeInTheDocument();
        });
    });
});
