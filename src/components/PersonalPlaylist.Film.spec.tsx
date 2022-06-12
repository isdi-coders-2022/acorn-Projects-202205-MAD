import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route } from 'react-router-dom';
import { iFilm } from '../models/interface';
import { Film } from './PersonalPlaylist.Film';

describe('Given Film component', () => {
    describe('When calling it', () => {
        test('Then it should render', async () => {
            const weatherChosen = 'Soleado';
            const filmData: iFilm = {
                id: 0,
                overview: '',
                poster_path: '',
                release_date: '',
                title: '',
                vote_average: 0,
            };
            const handleDelete = jest.fn();
            render(
                <BrowserRouter>
                    <Film
                        filmData={filmData}
                        handleDelete={handleDelete}
                        weatherChosen={weatherChosen}
                    />
                </BrowserRouter>
            );

            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            const element = screen.getByText(/soleado/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should handleDelete to been called', () => {
            const weatherChosen = 'Soleado';
            const filmData: iFilm = {
                id: 0,
                overview: '',
                poster_path: '',
                release_date: '',
                title: '',
                vote_average: 0,
            };
            const handleDelete = jest.fn();
            render(
                <BrowserRouter>
                    <Film
                        filmData={filmData}
                        handleDelete={handleDelete}
                        weatherChosen={weatherChosen}
                    />
                </BrowserRouter>
            );

            userEvent.click(screen.getByRole('button'));

            expect(handleDelete).toBeCalled();
        });
    });
});
