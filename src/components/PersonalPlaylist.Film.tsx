import { iFilm } from '../models/interface';

export function Film({
    weatherChosen,
    filmData,
    handleDelete,
}: {
    weatherChosen: string | undefined;
    filmData: iFilm;
    handleDelete: (id: iFilm['id']) => void;
}) {
    const template = (
        <>
            <img
                className="list__img"
                src={
                    'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                    filmData.poster_path
                }
                alt={filmData.title + ' poster'}
                title={filmData.id.toString()}
            />
            {weatherChosen}
            <button onClick={() => handleDelete(filmData.id)}>
                <img src="/img/delete.png" alt="borrar" />
            </button>
        </>
    );

    return template;
}
