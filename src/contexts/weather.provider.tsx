import { ReactElement, useState } from 'react';
import { WeatherContext } from './weather.context';

export function WeatherContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: string = 'caluroso';
    const [weather, setWeather] = useState(initialState);
    const [loginData, setLoginData] = useState({ status: false, user: '' });
    function loginProcess(user: string) {
        setLoginData({ status: true, user: user });
    }
    function newWeather(weather: string) {
        setWeather(weather);
    }

    const context = {
        loginData,
        loginProcess,
        weather,
        newWeather,
    };
    return (
        <WeatherContext.Provider value={context}>
            {children}
        </WeatherContext.Provider>
    );
}
