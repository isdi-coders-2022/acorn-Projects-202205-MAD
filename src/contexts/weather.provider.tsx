import { ReactElement, useState } from 'react';
import { iWeather } from '../models/interface';
import { WeatherHttpStore } from '../services/weather.http.store';
import { WeatherContext } from './weather.context';

export function WeatherContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: iWeather = {
        location: {
            name: '',
            region: '',
            country: '',
        },
        current: {
            temp_c: 0,
            condition: {
                text: '',
                finalText: 'caluroso',
            },
        },
    };
    const [weather, setWeather] = useState(initialState);
    const weatherApi = new WeatherHttpStore();
    function getWeather(location: string) {
        weatherApi.getWeather(location).then((resp) => setWeather(resp));
    }

    const context = {
        weather,
        getWeather,
    };
    return (
        <WeatherContext.Provider value={context}>
            {children}
        </WeatherContext.Provider>
    );
}
