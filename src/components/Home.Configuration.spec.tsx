import { fireEvent, render, screen } from '@testing-library/react';
import { Configuration } from './Home.Configuration';
import { FilmHttpStore } from '../services/films.http.store';
import { WeatherHttpStore } from '../services/weather.http.store';
import { iFilm, iWeather } from '../models/interface';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { WeatherContextProvider } from '../contexts/weather.provider';

jest.mock('../services/films.http.store');
jest.mock('../services/weather.http.store');
const film1: iFilm = {
    id: 13,
    overview: 'test',
    poster_path: 'test',
    release_date: 'test',
    title: 'test title',
    vote_average: 0,
};
const weather1: iWeather = {
    location: {
        name: '',
        region: '',
        country: '',
    },
    current: {
        temp_c: 0,
        condition: {
            text: 'Soleado',
        },
    },
};

describe('Given Home Configuration component', () => {
    beforeEach(() => {
        FilmHttpStore.prototype.getFilm = jest.fn().mockResolvedValue(film1);
        WeatherHttpStore.prototype.getWeather = jest
            .fn()
            .mockResolvedValue(weather1);
    });
    describe('When calling it', () => {
        test('Then it should render a text', () => {
            render(<Configuration />);

            const element = screen.getByText(/prueba eligiendo/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should select has rendered', () => {
            render(<Configuration />);
            userEvent.selectOptions(
                screen.getByTestId('select-weather') as HTMLFormElement,
                'Soleado'
            );
            const element = screen.getByRole('option', {
                name: 'Soleado',
            }) as HTMLFormElement;
            const element2 = screen.getByRole('option', {
                name: 'Lluvioso',
            }) as HTMLFormElement;
            expect(element.selected).toBe(true);
            expect(element2.selected).toBe(false);
        });
        test('then is should pressed the button and called functions', () => {
            render(
                <WeatherContextProvider>
                    <Configuration />
                </WeatherContextProvider>
            );
            userEvent.click(screen.getByRole('button'));

            userEvent.type(screen.getByRole('textbox'), 'test');
            expect(screen.getByRole('textbox')).toHaveValue('test');
            expect(FilmHttpStore.prototype.getFilm).toHaveBeenCalled();

            const element = screen.getByRole('button');
            expect(element).toBeInTheDocument();
        });
    });
});
