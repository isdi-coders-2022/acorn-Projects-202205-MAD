import { SyntheticEvent, useState } from 'react';
import { List } from './NewMatch.List';

export function Form() {
    const [selectedWeather, setSelectedWeather] = useState('');

    function selectWeather(ev: SyntheticEvent) {
        const target = ev.target as HTMLFormElement;
        setSelectedWeather(target.value);
    }
    const template = (
        <>
            <h3>CLIMA</h3>
            <a href="/playlist">Volver</a>
            <select
                className="config__selector"
                name="weather-config"
                id="weather-config-match"
                data-testid="weather-config-match"
                onChange={(ev) => selectWeather(ev)}
            >
                <option value="">--Selecciona un clima--</option>
                <option value="soleado">Soleado</option>
                <option value="caluroso">Caluroso</option>
                <option value="lluvia">Lluvia</option>
                <option value="frio y nublado">Frío y nublado</option>
                <option value="nieve">Nieve</option>
            </select>
            <List weather={selectedWeather} />
        </>
    );
    return template;
}
