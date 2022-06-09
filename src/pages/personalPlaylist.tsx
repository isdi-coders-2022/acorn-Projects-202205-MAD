import { Filter } from '../components/PersonalPlaylist.Filter';

export function PersonalPlaylist() {
    const template = (
        <>
            <a href="/newMatch">Añadir nuevo match</a>
            <Filter />
        </>
    );
    return template;
}

export default PersonalPlaylist;
