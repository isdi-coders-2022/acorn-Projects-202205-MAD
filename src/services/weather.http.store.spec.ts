import { iWeather } from '../models/interface';
import { WeatherHttpStore } from './weather.http.store';

const weather1: iWeather = {
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
describe('Given WeatherHttpStore service', () => {
    describe('When called getWeather', () => {
        test('Then it should return a weather object', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(weather1),
            });
            const api = new WeatherHttpStore();
            const response = await api.getWeather('');
            expect(response).toEqual(weather1);
        });
    });
});
