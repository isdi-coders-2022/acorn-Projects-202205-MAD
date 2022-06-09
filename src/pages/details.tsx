import { useParams } from 'react-router-dom';
import { FilmDetails } from '../components/Details.FilmDetails';

export function Details() {
    const { id } = useParams();
    const idFilm = id as string;
    const template = (
        <>
            <FilmDetails idFilm={idFilm} />
        </>
    );
    return template;
}

export default Details;
