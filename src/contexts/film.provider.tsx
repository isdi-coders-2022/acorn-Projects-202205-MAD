import { ReactElement, useState } from 'react';
import { iFilm } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';
import { FilmContext } from './film.context';

export function FilmContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<iFilm> = [];
    const [bufferedFilms, setFilms] = useState(initialState);
    const initialResultsState: iFilmResult = { expression: '', results: [] };
    const [searchResults, setSearchResults] = useState(initialResultsState);
    const filmApi = new FilmHttpStore();
    function getFilmById(id: string) {
        filmApi.getFilm(id).then((resp) => setFilms([...bufferedFilms, resp]));
    }
    function getFilmSearch(search: string) {
        filmApi.getSearchFilms(search).then((resp) => setSearchResults(resp));
    }

    const context = {
        bufferedFilms,
        searchResults,
        getFilmById,
        getFilmSearch,
    };
    return (
        <FilmContext.Provider value={context}>{children}</FilmContext.Provider>
    );
}
