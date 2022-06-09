import { render, screen } from '@testing-library/react';
import { Configuration } from './Home.Configuration';
import { FilmHttpStore } from '../services/films.http.store';
import { WeatherHttpStore } from '../services/weather.http.store';
import { iFilm, iWeather } from '../models/interface';
import userEvent from '@testing-library/user-event';

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
        test('Then it should render a textbox, combobox and button', () => {
            render(<Configuration />);
            const labelInput = screen.getByRole('textbox');
            expect(labelInput).toBeInTheDocument();
            const labelInput2 = screen.getByRole('combobox');
            expect(labelInput2).toBeInTheDocument();
            const labelInput3 = screen.getByRole('button');
            expect(labelInput3).toBeInTheDocument();
        });
    });
    describe('When writting on text input and clicking on send button', () => {
        test('Then it should get a weather and three films from the APIs', () => {
            render(<Configuration />);
            userEvent.type(screen.getByRole('textbox'), 'Madrid');
            userEvent.click(screen.getByRole('button'));
            expect(FilmHttpStore.prototype.getFilm).toHaveBeenCalled();
            expect(WeatherHttpStore.prototype.getWeather).toHaveBeenCalled();
        });
    });
    describe('When selecting on select input and clicking on send button', () => {
        test('Then it should get a weather and three films from the APIs', () => {
            render(<Configuration />);
            userEvent.selectOptions(screen.getByRole('combobox'), 'Soleado');
            userEvent.click(screen.getByRole('button'));
            expect(FilmHttpStore.prototype.getFilm).toHaveBeenCalled();
            expect(WeatherHttpStore.prototype.getWeather).toHaveBeenCalled();
        });
    });
});
