import { createContext } from 'react';

const initialContext: {
    loginData: { status: boolean; user: string };
    weather: string;
    newWeather: (weather: string) => void;
} = {
    loginData: { status: false, user: '' },
    weather: 'soleado',
    newWeather: () => {},
};

export const WeatherContext = createContext(initialContext);
