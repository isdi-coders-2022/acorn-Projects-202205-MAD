import { render, screen } from '@testing-library/react';
import { iFilm } from '../models/interface';
import { Results } from './Home.Results';

describe('Given Home > Info component', () => {
    const mockCurrentWeather = 'test weather';
    const mockResultsArray: Array<iFilm> = [
        {
            id: 'test string',
            title: 'test string',
            year: 'test string',
            image: 'test string',
            runtimeStr: 'test string',
            plotLocal: 'test string',
            directors: 'test string',
            stars: 'test string',
            genres: 'test string',
            countries: 'test string',
            imDbRating: 'test string',
        },
        {
            id: 'test string 2',
            title: 'test string 2',
            year: 'test string 2',
            image: 'test string 2',
            runtimeStr: 'test string 2',
            plotLocal: 'test string 2',
            directors: 'test string 2',
            stars: 'test string 2',
            genres: 'test string 2',
            countries: 'test string 2',
            imDbRating: 'test string 2',
        },
    ];
    describe('When calling it', () => {
        test('It should render', () => {
            render(
                <Results
                    currentWeather={mockCurrentWeather}
                    resultsArray={mockResultsArray}
                />
            );
            const labelInput = screen.getByText(/test weather/i);
            expect(labelInput).toBeInTheDocument();
        });
        test(`It should render ${mockResultsArray.length} items`, () => {
            render(
                <Results
                    currentWeather={mockCurrentWeather}
                    resultsArray={mockResultsArray}
                />
            );
            const listItemElements = screen.getAllByRole('listitem');
            expect(listItemElements).toHaveLength(mockResultsArray.length);
        });
    });
});
