import { SyntheticEvent, useEffect, useState } from 'react';
import { iFilm, iFilmSearch } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';

export function List() {
    const initialPrintSearch: iFilmSearch = {
        results: [
            {
                id: 0,
                overview: '',
                poster_path: '',
                release_date: '',
                title: '',
                vote_average: 0,
            },
        ],
    };
    const [search, setSearch] = useState('');
    const [printSearch, setPrintSearch] = useState(initialPrintSearch);

    useEffect(() => {
        if (search.length >= 3) {
            searchPrint(search).then((resp) => setPrintSearch(resp));
        }
    }, [search]);

    function handlerChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        setSearch(eventTarget.value);
    }

    async function searchPrint(search: string) {
        return await new FilmHttpStore().getSearchFilms(search);
    }

    const template = (
        <>
            <div>
                <img src="./img/icons8-búsqueda-30.png" alt="lupa" />
                <input
                    type="text"
                    value={search}
                    onChange={(ev) => handlerChange(ev)}
                />
            </div>

            <div>
                <ul className="search">
                    {printSearch.results.map(
                        (item) =>
                            item.poster_path !== null && (
                                <li className="search__list" key={item.title}>
                                    <img
                                        className="search__img"
                                        src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
                                        alt={item.title}
                                    />
                                    <span>
                                        {item.title +
                                            '  (' +
                                            item.release_date +
                                            ')'}
                                    </span>
                                </li>
                            )
                    )}
                </ul>
            </div>
        </>
    );
    return template;
}
