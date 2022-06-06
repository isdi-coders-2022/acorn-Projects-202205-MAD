import { createContext } from 'react';
import { iFilm } from '../models/interface';

const initialContext: {
    bufferedFilms: Array<iFilm>;
    searchResults: {
        expression: string;
        results: Array<{
            id: string;
            image: string;
            title: string;
            description: string;
        }>;
    };
    getFilmById: (id: string) => void;
    getFilmSearch: (search: string) => void;
} = {
    bufferedFilms: [],
    searchResults: {
        expression: '',
        results: [{ id: '', image: '', title: '', description: '' }],
    },
    getFilmById: () => {},
    getFilmSearch: () => {},
};

export const FilmContext = createContext(initialContext);
