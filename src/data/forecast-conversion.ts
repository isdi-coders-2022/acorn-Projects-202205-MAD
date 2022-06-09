// import { iWeather, spanishWeather } from '../models/interface';

export type complexWeathers =
    | 'Sunny'
    | 'Partly cloudy'
    | 'Cloudy'
    | 'Overcast'
    | 'Mist'
    | 'Patchy rain possible'
    | 'Patchy snow possible'
    | 'Patchy sleet possible'
    | 'Patchy freezing drizzle possible'
    | 'Thundery outbreaks possible'
    | 'Blowing snow'
    | 'Blizzard'
    | 'Fog'
    | 'Freezing fog'
    | 'Patchy light drizzle'
    | 'Light drizzle'
    | 'Freezing drizzle'
    | 'Heavy freezing drizzle'
    | 'Patchy light rain'
    | 'Light rain'
    | 'Moderate rain at times'
    | 'Moderate rain'
    | 'Heavy rain at times'
    | 'Heavy rain'
    | 'Light freezing rain'
    | 'Moderate or heavy freezing rain'
    | 'Light sleet'
    | 'Moderate or heavy sleet'
    | 'Patchy light snow'
    | 'Light snow'
    | 'Patchy moderate snow'
    | 'Moderate snow'
    | 'Patchy heavy snow'
    | 'Heavy snow'
    | 'Ice pellets'
    | 'Light rain shower'
    | 'Moderate or heavy rain shower'
    | 'Torrential rain shower'
    | 'Light sleet showers'
    | 'Moderate or heavy sleet showers'
    | 'Light snow showers'
    | 'Moderate or heavy snow showers'
    | 'Light showers of ice pellets'
    | 'Moderate or heavy showers of ice pellets'
    | 'Patchy light rain with thunder'
    | 'Moderate or heavy rain with thunder'
    | 'Patchy light snow with thunder'
    | 'Moderate or heavy snow with thunder';

export const weatherMatchers = {
    Sunny: 'Soleado',
    'Partly cloudy': 'Soleado',
    Cloudy: 'Soleado',
    Overcast: 'Frio y nublado',
    Mist: 'Frio y nublado',
    'Patchy rain possible': 'Soleado',
    'Patchy snow possible': 'Nieve',
    'Patchy sleet possible': 'Lluvia',
    'Patchy freezing drizzle possible': 'Lluvia',
    'Thundery outbreaks possible': 'Lluvia',
    'Blowing snow': 'Nieve',
    Blizzard: 'Nieve',
    Fog: 'Frio y nublado',
    'Freezing fog': 'Frio y nublado',
    'Patchy light drizzle': 'Lluvia',
    'Light drizzle': 'Lluvia',
    'Freezing drizzle': 'Lluvia',
    'Heavy freezing drizzle': 'Nieve',
    'Patchy light rain': 'Soleado',
    'Light rain': 'Lluvia',
    'Moderate rain at times': 'Lluvia',
    'Moderate rain': 'Lluvia',
    'Heavy rain at times': 'Lluvia',
    'Heavy rain': 'Lluvia',
    'Light freezing rain': 'Nieve',
    'Moderate or heavy freezing rain': 'Nieve',
    'Light sleet': 'Nieve',
    'Moderate or heavy sleet': 'Nieve',
    'Patchy light snow': 'Nieve',
    'Light snow': 'Nieve',
    'Patchy moderate snow': 'Nieve',
    'Moderate snow': 'Nieve',
    'Patchy heavy snow': 'Nieve',
    'Heavy snow': 'Nieve',
    'Ice pellets': 'Nieve',
    'Light rain shower': 'Nieve',
    'Moderate or heavy rain shower': 'Lluvia',
    'Torrential rain shower': 'Lluvia',
    'Light sleet showers': 'Lluvia',
    'Moderate or heavy sleet showers': 'Lluvia',
    'Light snow showers': 'Nieve',
    'Moderate or heavy snow showers': 'Nieve',
    'Light showers of ice pellets': 'Lluvia',
    'Moderate or heavy showers of ice pellets': 'Nieve',
    'Patchy light rain with thunder': 'Lluvia',
    'Moderate or heavy rain with thunder': 'Lluvia',
    'Patchy light snow with thunder': 'Lluvia',
    'Moderate or heavy snow with thunder': 'Lluvia',
};

// const a: Array<iWeather> = [
//     {
//         location: {
//             name: '',
//             region: '',
//             country: '',
//         },
//         current: {
//             temp_c: 25,
//             condition: {
//                 text: 'Sunny',
//                 finalText: 'caluroso',
//             },
//         },
//     },
// ];
// a.forEach((item) => {
//     const index = item.current.condition.text as keyof typeof weatherMatchers;
//     item.current.condition.finalText = weatherMatchers[index] as spanishWeather;
// });
