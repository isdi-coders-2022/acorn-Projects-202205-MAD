import { render, screen } from '@testing-library/react';
import { FilmDetails } from './Details.FilmDetails';
import { FilmHttpStore } from '../services/films.http.store';
import { iFilm, iVideo } from '../models/interface';

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

describe('Given FilmDetails component', () => {
    beforeEach(() => {
        FilmHttpStore.prototype.getFilm = jest.fn().mockResolvedValue(film1);
        FilmHttpStore.prototype.getVideo = jest.fn().mockResolvedValue(video1);
    });
    describe('When calling it', () => {
        test('It should ask data to the api and render', async () => {
            const id = 0;

            render(<FilmDetails idFilm={id.toString()} />);

            const labelInput = await screen.findByText(/test title/i);
            expect(labelInput).toBeInTheDocument();
        });
    });
});
