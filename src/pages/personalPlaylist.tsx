import { Link } from 'react-router-dom';
import { Filter } from '../components/PersonalPlaylist.Filter';

export function PersonalPlaylist() {
    const template = (
        <>
            <Link to="/newMatch">Añadir nuevo match</Link>
            <Filter />
        </>
    );
    return template;
}

export default PersonalPlaylist;
