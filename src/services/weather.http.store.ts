import { iWeather } from '../models/interface';

export class WeatherHttpStore {
    url: string;
    constructor() {
        this.url =
            'http://api.weatherapi.com/v1/current.json?key=83c33262545a4c83922152732220306&q=';
    }

    getWeather(location: string): Promise<iWeather> {
        return fetch(this.url + location).then((response) => response.json());
    }
}
