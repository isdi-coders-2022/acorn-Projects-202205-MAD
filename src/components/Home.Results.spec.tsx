import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { iFilm } from '../models/interface';
import { Results } from './Home.Results';

describe('Given Home > Info component', () => {
    const mockCurrentWeather = 'test weather';
    const mockResultsArray: Array<iFilm> = [
        {
            id: 0,
            overview: 'test string',
            poster_path: 'test string',
            release_date: 'test string',
            title: 'test string',
            vote_average: 0,
        },
        {
            id: 1,
            overview: 'test string 2',
            poster_path: 'test string 2',
            release_date: 'test string 2',
            title: 'test string 2',
            vote_average: 0,
        },
    ];
    describe('When calling it', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Results
                        currentWeather={mockCurrentWeather}
                        resultsArray={mockResultsArray}
                    />
                </BrowserRouter>
            );
            const labelInput = screen.getByText(/recomendaciones/i);
            expect(labelInput).toBeInTheDocument();
        });
        test(`It should render ${mockResultsArray.length} items`, () => {
            render(
                <BrowserRouter>
                    <Results
                        currentWeather={mockCurrentWeather}
                        resultsArray={mockResultsArray}
                    />
                </BrowserRouter>
            );
            const listItemElements = screen.getAllByRole('listitem');
            expect(listItemElements).toHaveLength(mockResultsArray.length);
        });
    });
});
