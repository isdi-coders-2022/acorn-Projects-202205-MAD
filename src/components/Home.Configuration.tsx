import { SyntheticEvent, useEffect, useState } from 'react';
import { premadeMatches } from '../data/premade-matches';
import { complexWeathers, weatherMatchers } from '../data/forecast-conversion';
import { iFilm, iWeather, spanishWeather } from '../models/interface';
import { WeatherHttpStore } from '../services/weather.http.store';
import { FilmHttpStore } from '../services/films.http.store';
import { Results } from './Home.Results';

export function Configuration() {
    const [configData, setConfigData] = useState({
        location: '',
        weather: 'Soleado',
    });
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

    useEffect(() => {}, []);

    const complexWeather = currentWeather.current.condition
        .text as complexWeathers;
    const simpleWeather = weatherMatchers[complexWeather] as spanishWeather;

    function handleButtonClick(ev: SyntheticEvent) {
        ev.preventDefault();
        if (configData.location) {
            new WeatherHttpStore()
                .getWeather(configData.location)
                .then((weatherGetted) => {
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
        } else if (configData.weather) {
            let simpleWeather = configData.weather as spanishWeather;
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
        }
    }
    function handleTextChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        setConfigData({ ...configData, location: eventTarget.value });
    }
    function handleSelectChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        setConfigData({ ...configData, weather: eventTarget.value });
    }
    const template = (
        <>
            {' '}
            <div className="container">
                <h1 className="contact_text">
                    <strong>Prueba eligiendo el ambiente:</strong>
                </h1>
            </div>
            <div className="container">
                <div className="form-group">
                    <input
                        onChange={(ev) => handleTextChange(ev)}
                        type="text"
                        className="email-bt"
                        placeholder="Ubicación               🧭"
                        name="Name"
                        value={configData.location}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="select"
                        onChange={(ev) => handleSelectChange(ev)}
                    >
                        <option value="Caluroso">Caluroso</option>
                        <option value="Soleado">Soleado</option>
                        <option value="Lluvia">Lluvioso</option>
                        <option value="Frio y nublado">Frio y Nublado</option>
                        <option value="Nieve">Nieve</option>
                    </select>
                </div>
            </div>
            <p className="descriptionSelect">
                Selecciona uno de nuestros dos metodos para que "Let me see", te
                sugiera una película.{' '}
            </p>
            <p className="descriptionContinue">
                Tú decides, tu ubicación o el estado climático que tengas en
                mente¨
            </p>
            <div className="send_btn">
                <button
                    onClick={(ev) => handleButtonClick(ev)}
                    className="main_bt"
                >
                    Enviar
                </button>
            </div>
            <Results
                currentWeather={simpleWeather}
                resultsArray={currentResults}
            />
        </>
    );
    return template;
}
