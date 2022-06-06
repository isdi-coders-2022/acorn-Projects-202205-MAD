import { iWeather } from '../models/interface';

export class WeatherHttpStore {
    url: string;
    constructor() {
        this.url = 'https://imdb-api.com/es/API/Title/k_wpbdnk6v/';
    }

    getWeather(location: string): Promise<iWeather> {
        return fetch(this.url + location).then((response) => response.json());
    }
}
