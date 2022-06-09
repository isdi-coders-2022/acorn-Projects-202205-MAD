import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { MatchContext } from '../contexts/match.context';
import LogoutButton from './Login.LogoutButton';
import { Playlist } from './PersonalPlaylist.Playlist';

export function Filter() {
    const { matches } = useContext(MatchContext);
    const [filteredMatches, setFilteredMatches] = useState(matches);
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        if (selectedFilter) {
            setFilteredMatches(
                matches.filter((match) => match.weather === selectedFilter)
            );
        } else {
            setFilteredMatches(matches);
        }
    }, [matches, selectedFilter]);

    function handleChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        if (eventTarget.value) {
            setSelectedFilter(eventTarget.value);
        } else {
            setSelectedFilter('');
        }
    }

    const template = (
        <>
            <div className="nav__personal">
                <select
                    onChange={(ev) => handleChange(ev)}
                    className="config__selector"
                    name="weather-config"
                    id="weather-config"
                >
                    <option value="">--Selecciona un clima--</option>
                    <option value="soleado">Soleado</option>
                    <option value="caluroso">Caluroso</option>
                    <option value="lluvia">Lluvia</option>
                    <option value="frio y nublado">Frío y nublado</option>
                    <option value="nieve">Nieve</option>
                </select>
                <LogoutButton />
            </div>
            <Playlist list={filteredMatches} />
        </>
    );
    return template;
}
