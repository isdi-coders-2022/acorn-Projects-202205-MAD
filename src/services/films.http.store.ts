import { iFilm, iFilmResult } from '../models/interface';

export class FilmHttpStore {
    idUrl: string;
    searchUrl: string;
    constructor() {
        this.idUrl = 'https://imdb-api.com/es/API/Title/k_wpbdnk6v/';
        this.searchUrl = 'https://imdb-api.com/en/API/Search/k_wpbdnk6v/';
    }

    getFilm(id: string): Promise<iFilm> {
        return fetch(this.idUrl + id).then((response) => response.json());
    }
    getSearchFilms(search: string): Promise<iFilmResult> {
        return fetch(this.searchUrl + search).then((response) =>
            response.json()
        );
    }
}
