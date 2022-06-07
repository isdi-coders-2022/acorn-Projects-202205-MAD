import { createContext } from 'react';
import { iWeather } from '../models/interface';

const initialContext: {
    loginData: { status: boolean; user: string };
    weather: iWeather;
    getWeather: (location: string) => void;
} = {
    loginData: { status: false, user: '' },
    weather: {
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
    },
    getWeather: () => {},
};

export const WeatherContext = createContext(initialContext);
