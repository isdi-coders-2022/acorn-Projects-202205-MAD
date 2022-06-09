import { useState } from 'react';
import { iFilm, iVideo } from '../models/interface';
import { FilmHttpStore } from '../services/films.http.store';

export function FilmDetails({ idFilm }: { idFilm: string }) {
    const initialState: iFilm = {
        id: 0,
        overview: '',
        poster_path: '',
        release_date: '',
        title: '',
        vote_average: 0,
    };

    const videoInitialState: iVideo = {
        id: 0,
        results: [{ key: '', type: '' }],
    };

    const [infoFilm, setInfoFilm] = useState(initialState);
    const [videoFilm, setVideoFilm] = useState(videoInitialState);
    const filmApi = new FilmHttpStore();

    filmApi.getFilm(Number(idFilm)).then((pelicula) => {
        setInfoFilm(pelicula);
    });

    filmApi.getVideo(Number(idFilm)).then((resp) => {
        setVideoFilm(resp);
    });

    console.log(videoFilm);

    const template = (
        <>
            <section className="detail">
                <img
                    className="detail__img"
                    src={`https://image.tmdb.org/t/p/w1280/${infoFilm.poster_path}`}
                    alt={infoFilm.title}
                />
                <article>
                    <h2 className="Tittle__film">{infoFilm.title}</h2>
                    <ul className="Description">
                        <li>Sinopsis:{infoFilm.overview}</li>
                        <li>Estreno:{infoFilm.release_date}</li>
                        <li>Puntuación:{infoFilm.vote_average}</li>
                    </ul>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoFilm.results[0].key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </article>
            </section>
        </>
    );

    return template;
}
