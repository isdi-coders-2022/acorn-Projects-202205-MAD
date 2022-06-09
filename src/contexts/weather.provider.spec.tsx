import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { WeatherHttpStore } from '../services/weather.http.store';
import { WeatherContext } from './weather.context';
import { WeatherContextProvider } from './weather.provider';

jest.mock('../services/weather.http.store');

const weather1 = {
    location: {
        name: 'string',
        region: 'string',
        country: 'string',
    },
    current: {
        temp_c: 24,
        condition: {
            text: 'Soleado',
        },
    },
};

describe('Given match.context', () => {
    describe('When it is used by a test component', () => {
        let MockComponent: () => JSX.Element;
        beforeEach(() => {
            WeatherHttpStore.prototype.getWeather = jest
                .fn()
                .mockResolvedValue([weather1]);
            MockComponent = function () {
                const { weather, newWeather, loginData } =
                    useContext(WeatherContext);
                return (
                    <>
                        <p>testing weather: {weather}</p>
                        <p>
                            testing loginData:{' '}
                            {loginData.status ? 'true' : 'false'}
                        </p>
                        <button onClick={() => newWeather('test')}>
                            getWeather
                        </button>
                    </>
                );
            };
        });
        test('Then it should render info from the context', async () => {
            render(
                <WeatherContextProvider>
                    <MockComponent />
                </WeatherContextProvider>
            );

            const element = screen.getByText(/caluroso/i);
            expect(element).toBeInTheDocument();
            const element2 = screen.getByText(/false/i);
            expect(element2).toBeInTheDocument();
            const element3 = screen.getByRole('button');
            expect(element3).toBeInTheDocument();
        });
        test('Then it should get data from the context', () => {
            render(
                <WeatherContextProvider>
                    <MockComponent />
                </WeatherContextProvider>
            );
            userEvent.click(screen.getByRole('button'));
            expect(WeatherHttpStore.prototype.getWeather).toHaveBeenCalled();
        });
    });
});
