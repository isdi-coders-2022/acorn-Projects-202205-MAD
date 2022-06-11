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
                const { weather, newWeather, loginData, loginProcess } =
                    useContext(WeatherContext);
                return (
                    <>
                        <p>testing weather: {weather}</p>
                        <p>
                            testing loginData:{' '}
                            {loginData.status ? 'true' : 'false'}
                        </p>
                        <button onClick={() => newWeather('newWeather')}>
                            getWeather
                        </button>
                        <button onClick={() => loginProcess('test')}>
                            loginTest
                        </button>
                    </>
                );
            };
        });
        test('Then it should render text', () => {
            render(
                <WeatherContextProvider>
                    <MockComponent />
                </WeatherContextProvider>
            );

            const element = screen.getByText(/testing weather:/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should function called', async () => {
            render(
                <WeatherContextProvider>
                    <MockComponent />
                </WeatherContextProvider>
            );

            userEvent.click(screen.getByText(/getWeather/i));
            const element = await screen.findByText(/newWeather/);
            expect(element).toBeInTheDocument();
        });
        test('Then it should loginProcess setted', async () => {
            render(
                <WeatherContextProvider>
                    <MockComponent />
                </WeatherContextProvider>
            );
            // const mockSetter = jest.spyOn(React, '');

            // userEvent.click(screen.getByText(/loginTest/));
            // expect(mockSetter).toBeCalled();
        });
    });
});
