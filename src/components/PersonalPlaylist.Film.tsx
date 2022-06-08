import { iFilm } from '../models/interface';

export function Film({
    weatherChosen,
    filmData,
}: {
    weatherChosen: string | undefined;
    filmData: iFilm;
}) {
    const template = (
        <>
            <p>{filmData.title}</p>
            <img
                src={
                    'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                    filmData.poster_path
                }
                alt={filmData.title + ' poster'}
            />
            {weatherChosen}
        </>
    );
    return template;
}
