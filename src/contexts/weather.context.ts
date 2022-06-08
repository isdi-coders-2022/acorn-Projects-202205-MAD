import { createContext } from 'react';
import { iWeather } from '../models/interface';

const initialContext: {
    weather: iWeather;
    getWeather: (location: string) => void;
} = {
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
                finalText: 'caluroso',
            },
        },
    },
    getWeather: () => {},
};

export const WeatherContext = createContext(initialContext);
