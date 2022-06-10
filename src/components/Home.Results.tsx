import { Link } from 'react-router-dom';
import { iFilm } from '../models/interface';

export function Results({
    currentWeather,
    resultsArray,
}: {
    currentWeather: string;
    resultsArray: Array<iFilm>;
}) {
    const template = (
        <section className="results">
            <p>Recomendaciones para el clima elegido:</p>
            <ul>
                {resultsArray.map((result) => (
                    <li key={result.id}>
                        <figure>
                            <Link to={`/details/${result.id}`}>
                                <img
                                    src={
                                        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                                        result.poster_path
                                    }
                                    alt="result poster"
                                />
                            </Link>
                            <figcaption>{result.title}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    );
    return template;
}
