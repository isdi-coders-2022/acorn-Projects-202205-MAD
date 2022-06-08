import { premadeMatches } from '../data/premade-matches';
import { iWeather } from '../models/interface';

export function Home() {
    const weather: iWeather = {
        location: {
            name: '',
            region: '',
            country: '',
        },
        current: {
            temp_c: 25,
            condition: {
                text: '',
                finalText: 'caluroso',
            },
        },
    };
    const films = premadeMatches[weather.current.condition.finalText];
    let tresFilms = [];
    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * films.length);
        tresFilms.push(films.splice(random, 1)[0]);
    }
    console.log(tresFilms);

    const template = (
        <>
            <p>Esto es el home</p>
        </>
    );
    return template;
}
