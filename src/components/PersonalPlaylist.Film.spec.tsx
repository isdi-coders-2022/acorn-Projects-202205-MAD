import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { iFilm } from '../models/interface';
import { Film } from './PersonalPlaylist.Film';

describe('Given Film component', () => {
    describe('When calling it', () => {
        test('Then it should render', () => {
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
                <Film
                    filmData={filmData}
                    handleDelete={handleDelete}
                    weatherChosen={weatherChosen}
                />
            );
            const test1 = screen.getByText(/soleado/i);
            expect(test1).toBeInTheDocument();
            const test2 = screen.getByRole('button');
            expect(test2).toBeInTheDocument();
        });
    });
    describe('When clicking on delete button', () => {
        test('Then delete function should be called', () => {
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
                <Film
                    filmData={filmData}
                    handleDelete={handleDelete}
                    weatherChosen={weatherChosen}
                />
            );
            userEvent.click(screen.getByRole('button'));
            expect(handleDelete).toHaveBeenCalled();
        });
    });
});
