import { useEffect, useState } from 'react';
import { iFilmSearch } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';

export function Film() {
    const [loading, setLoading] = useState(true);
    const [filmData, setFilmData] = useState<iFilmSearch>();

    useEffect(() => {
        new FilmHttpStore().getSearchFilms('titanic').then((resp) => {
            setFilmData(resp);
            setLoading(false);
        });
    }, []);

    return loading ? (
        <h2>Loading</h2>
    ) : (
        <>
            <h3>{filmData!.results[0].title}</h3>
            <img
                src={
                    'https://image.tmdb.org/t/p/w1280/' +
                    filmData?.results[0].poster_path
                }
                alt="titanic"
            />
            <p>{filmData?.results[0].overview}</p>
        </>
    );
}
