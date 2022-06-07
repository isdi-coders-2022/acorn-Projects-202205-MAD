import { iFilm, iFilmSearch, iVideo } from '../models/interface';

export class FilmHttpStore {
    searchUrl: string;
    constructor() {
        this.searchUrl =
            'https://api.themoviedb.org/3/search/movie?api_key=267f7f2f6562e0efb0d9fd6e00831534&language=es&page=1&include_adult=false&query=';
    }

    getFilm(id: iFilm['id']): Promise<iFilm> {
        return fetch(
            `https://api.themoviedb.org/3/find/${id}?api_key=267f7f2f6562e0efb0d9fd6e00831534&language=es&external_source=imdb_id`
        ).then((response) => response.json());
    }
    getSearchFilms(search: string): Promise<iFilmSearch> {
        return fetch(this.searchUrl + search).then((response) =>
            response.json()
        );
    }
    getVideo(id: iVideo['id']): Promise<iVideo> {
        return fetch(
            `http://api.themoviedb.org/3/movie/${id}/videos?api_key=267f7f2f6562e0efb0d9fd6e00831534`
        ).then((response) => response.json());
    }
}
