import { iFilm, iVideo } from '../models/interface';
import { FilmHttpStore } from './films.http.store';

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

describe('Given FilmHttpStore service', () => {
    describe('When called getFilm', () => {
        test('Then it should return a film', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(film1),
            });
            const api = new FilmHttpStore();
            const response = await api.getFilm(0);
            expect(response).toEqual(film1);
        });
    });
    describe('When called getVideo', () => {
        test('Then it should return a film', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(video1),
            });
            const api = new FilmHttpStore();
            const response = await api.getVideo(0);
            expect(response).toEqual(video1);
        });
    });
    describe('When called getSearchFilms', () => {
        test('Then it should return a film', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([film1]),
            });
            const api = new FilmHttpStore();
            const response = await api.getSearchFilms('');
            expect(response).toEqual([film1]);
        });
    });
});
