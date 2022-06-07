import { useState } from 'react';
import { iFilm, iMatch } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';
import { Film } from './PersonalPlaylist.Film';

export function Playlist({ list }: { list: Array<iMatch> }) {
    const initialState: Array<iFilm> = [];
    const [filmList, setFilmList] = useState(initialState);
    const promises: Array<Promise<iFilm>> = [];
    const filmApi = new FilmHttpStore();
    list.forEach((matchItem) =>
        promises.push(filmApi.getFilm(matchItem.idFilm))
    );
    Promise.all(promises).then((array) => setFilmList(array));
    const template = (
        <ul>
            {filmList.map((film) => (
                <li>
                    <Film
                        weatherChosen={
                            list.find((item) => item.idFilm === film.id)
                                ?.weather
                        }
                        filmData={film}
                    />
                </li>
            ))}
        </ul>
    );
    return template;
}
