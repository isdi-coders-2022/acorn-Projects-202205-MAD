import { Link } from 'react-router-dom';
import { Filter } from '../components/PersonalPlaylist.Filter';

export function PersonalPlaylist() {
    const template = (
        <>
            <Link to="/newMatch">
                <img
                    src="/img/add-match.png"
                    alt="añadir nuevo"
                    className="add-match"
                />
            </Link>
            <Filter />
        </>
    );
    return template;
}

export default PersonalPlaylist;
