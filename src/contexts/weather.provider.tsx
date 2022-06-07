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
            },
        },
    };
    const [weather, setWeather] = useState(initialState);
    const [loginData, setLoginData] = useState({ status: false, user: '' });
    const weatherApi = new WeatherHttpStore();
    function loginProcess(user: string) {
        setLoginData({ status: true, user: user });
    }
    function getWeather(location: string) {
        weatherApi.getWeather(location).then((resp) => setWeather(resp));
    }

    const context = {
        loginData,
        loginProcess,
        weather,
        getWeather,
    };
    return (
        <WeatherContext.Provider value={context}>
            {children}
        </WeatherContext.Provider>
    );
}
