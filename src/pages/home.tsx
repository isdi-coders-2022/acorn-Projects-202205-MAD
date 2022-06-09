import { useEffect, useState } from 'react';
import { premadeMatches } from '../data/premade-matches';
import { complexWeathers, weatherMatchers } from '../data/forecast-conversion';
import { iFilm, iWeather, spanishWeather } from '../models/interface';
import { WeatherHttpStore } from '../services/weather.http.store';
import { FilmHttpStore } from '../services/films.http.store';

export function Home() {
    const initialValue: iWeather = {
        location: {
            name: '',
            region: '',
            country: '',
        },
        current: {
            temp_c: 25,
            condition: {
                text: 'Sunny',
            },
        },
    };
    const [currentWeather, setCurrentWeather] = useState(initialValue);
    const initialResultsValue: Array<iFilm> = [];
    const [currentResults, setCurrentResults] = useState(initialResultsValue);
    useEffect(() => {
        new WeatherHttpStore().getWeather('Londres').then((weatherGetted) => {
            setCurrentWeather(weatherGetted);
            const complexWeather = currentWeather.current.condition
                .text as complexWeathers;
            let simpleWeather = weatherMatchers[
                complexWeather
            ] as spanishWeather;
            if (
                simpleWeather === 'Soleado' &&
                currentWeather.current.temp_c > 29
            ) {
                simpleWeather = 'Caluroso';
            }
            const films: Array<number> = premadeMatches[simpleWeather];

            let tresFilms = [];
            for (let i = 0; i < 3; i++) {
                const random = Math.floor(Math.random() * films.length);
                tresFilms.push(films.splice(random, 1)[0]);
            }
            const filmApi = new FilmHttpStore();
            let promises: Array<Promise<iFilm>> = tresFilms.map((id) =>
                filmApi.getFilm(id)
            );
            Promise.all(promises).then((threeFilms) =>
                setCurrentResults(threeFilms)
            );
        });
    }, []);

    const template = (
        <>
            <p>Esto es el home</p>
            {currentResults.map((film) => film.title)}
        </>
    );
    return template;
}
