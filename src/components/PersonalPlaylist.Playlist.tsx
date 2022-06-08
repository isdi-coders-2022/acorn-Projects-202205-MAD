import { useContext, useEffect, useState } from 'react';
import { MatchContext } from '../contexts/match.context';
import { iFilm, iMatch } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';
import { Film } from './PersonalPlaylist.Film';

export function Playlist({ list }: { list: Array<iMatch> }) {
    const initialState: Array<iFilm> = [];
    const [filmList, setFilmList] = useState(initialState);
    const { matches, deleteMatch } = useContext(MatchContext);
    useEffect(() => {
        const promises: Array<Promise<iFilm>> = [];
        const filmApi = new FilmHttpStore();
        list.forEach((matchItem) =>
            promises.push(filmApi.getFilm(matchItem.idFilm))
        );
        Promise.all(promises).then((array) => setFilmList(array));
    }, [list]);

    function handleDeleteMatch(idFilm: iFilm['id']) {
        const matchToDelete = matches.find(
            (match) => (match.idFilm = idFilm)
        ) as iMatch;
        deleteMatch(matchToDelete);
    }

    const template = (
        <ul>
            {filmList.map((film) => (
                <li key={film.id}>
                    <Film
                        weatherChosen={
                            list.find((item) => item.idFilm === film.id)
                                ?.weather
                        }
                        filmData={film}
                        handleDelete={handleDeleteMatch}
                    />
                </li>
            ))}
        </ul>
    );
    return template;
}
