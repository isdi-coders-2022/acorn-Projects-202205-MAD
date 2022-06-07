import { SyntheticEvent, useEffect, useState } from 'react';
import { iFilmSearch } from '../models/interface';
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
    function orderBy(ev: SyntheticEvent) {
        let order: iFilmSearch = {
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
        order = {
            results: printSearch.results.sort((a, b) =>
                a.title.localeCompare(b.title)
            ),
        };
        setPrintSearch(order);
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

                <select
                    className="config__selector"
                    name="sort-config"
                    id="sort-config-match"
                    onChange={(ev) => orderBy(ev)}
                >
                    <option value="">ordenar por</option>
                    <option value="alphabetic">alfabeticamente</option>
                    <option value="age-">año (menos a mas)</option>
                    <option value="age+">año (mas a menos)</option>
                </select>
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
