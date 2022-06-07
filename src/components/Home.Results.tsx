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
            <p>Recomendaciones para: {currentWeather}</p>
            <ul>
                {resultsArray.map((result) => (
                    <li key={result.id}>
                        <figure>
                            <img src={result.image} alt="result poster" />
                            <figcaption>
                                {result.title} {result.year}
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    );
    return template;
}
