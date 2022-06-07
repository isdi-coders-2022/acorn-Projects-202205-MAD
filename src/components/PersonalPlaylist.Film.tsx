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
            <img src={filmData.poster_path} alt={filmData.title + ' poster'} />
            {weatherChosen}
        </>
    );
    return template;
}
