import { SyntheticEvent, useContext, useState } from 'react';
import { MatchContext } from '../contexts/match.context';
import { WeatherContext } from '../contexts/weather.context';
import { iMatch } from '../models/interface';
import { Playlist } from './PersonalPlaylist.Playlist';

export function Filter() {
    const initialState: Array<iMatch> = [];
    const [filteredMatches, setFilteredMatches] = useState(initialState);
    const { matches } = useContext(MatchContext);

    function handleChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;

        setFilteredMatches(
            matches.filter((match) => match.weather === eventTarget.value)
        );
    }

    const template = (
        <>
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
            <Playlist list={filteredMatches} />
        </>
    );
    return template;
}
