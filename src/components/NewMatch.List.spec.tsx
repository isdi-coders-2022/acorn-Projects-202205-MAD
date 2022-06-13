import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MatchContext } from '../contexts/match.context';
import { FilmHttpStore } from '../services/films.http.store';
import { List } from './NewMatch.List';

// Mock de HTTP Store service '../services/films.http.store'
jest.mock('../services/films.http.store');
// Crear mock de datos de pelicula
const search = {
    results: [
        {
            id: 1,
            overview: 'test',
            poster: 'test',
            release_date: 'test',
            title: 'test',
            vote_average: 1,
        },
    ],
};
// MockResolvedValue de la llamada (FilmHttpStore().getSearchFilms(search))
// siempre devuelve el mock de datos de la pelicula

describe('Given NewMatch.List', () => {
    describe('When it is used by test', () => {
        beforeEach(() => {
            FilmHttpStore.prototype.getSearchFilms = jest
                .fn()
                .mockResolvedValue(search);
        });

        test('Then it should render', () => {
            render(<List weather={'caluroso'} />);

            const element = screen.getByText(/Si cambia el clima/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should select the select button', () => {
            render(<List weather={'caluroso'} />);

            userEvent.selectOptions(
                screen.getByTestId('sort-config-match') as HTMLFormElement,
                'alphabetic'
            );

            const option = screen.getByRole('option', {
                name: 'alfabeticamente',
            }) as HTMLFormElement;
            const option2 = screen.getByRole('option', {
                name: 'año (menos a mas)',
            }) as HTMLFormElement;

            expect(option.selected).toBe(true);
            expect(option2.selected).toBe(false);
        });
        // test('should first', async () => {
        //     const mockContext = {
        //         addMatch: jest.fn(),
        //         matches: [],
        //         modifyMatch: jest.fn(),
        //         deleteMatch: jest.fn(),
        //     };

        //     render(
        //         <MatchContext.Provider value={mockContext}>
        //             <List weather={'caluroso'} />
        //         </MatchContext.Provider>
        //     );

        //     const inputField = screen.getByTestId('search');

        //     userEvent.click(inputField);
        //     userEvent.keyboard('test');

        //     userEvent.click(await screen.findByText(/test/));

        //     expect(mockContext.addMatch).toHaveBeCalled();
        // });
    });
});
