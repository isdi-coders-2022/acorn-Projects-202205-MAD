import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect, useState } from 'react';
import { MatchContext } from '../contexts/match.context';
import { iFilm, iMatch } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';
import { Film } from './PersonalPlaylist.Film';

export function Playlist({ list }: { list: Array<iMatch> }) {
    const initialState: Array<iFilm> = [];
    const [filmList, setFilmList] = useState(initialState);
    const { matches, deleteMatch } = useContext(MatchContext);
    const { user } = useAuth0();
    useEffect(() => {
        const promises: Array<Promise<iFilm>> = [];
        const filmApi = new FilmHttpStore();
        list.forEach((matchItem) =>
            promises.push(filmApi.getFilm(matchItem.idFilm))
        );
        Promise.all(promises).then((array) => setFilmList(array));
    }, [list, matches]);

    function handleDeleteMatch(idFilm: iFilm['id']) {
        const matchToDelete = matches.find(
            (match) => match.idFilm === idFilm
        ) as iMatch;
        deleteMatch(matchToDelete);
    }

    const template = (
        <>
            <div className="playlist">
                <p>Playlist personal de {user?.nickname}</p>
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
            </div>
        </>
    );
    return template;
}
