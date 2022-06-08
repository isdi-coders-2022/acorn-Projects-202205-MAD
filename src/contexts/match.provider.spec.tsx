import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { Match } from '../models/Match';
import { MatchHttpStore } from '../services/match.http.store';
import { MatchContext } from './match.context';
import { MatchContextProvider } from './match.provider';

jest.mock('../services/match.http.store');

const match1 = new Match('weather1', 0);
const match2 = new Match('weather2', 1);
const match3 = new Match('weather3', 2);

describe('Given match.context', () => {
    describe('When it is used by a test component', () => {
        let MockComponent: () => JSX.Element;
        beforeEach(() => {
            MatchHttpStore.prototype.getAllMatch = jest
                .fn()
                .mockResolvedValue([match1, match3]);
            MockComponent = function () {
                const { addMatch, deleteMatch, matches, modifyMatch } =
                    useContext(MatchContext);
                return (
                    <>
                        <p>testing match</p>
                        <ul>
                            {matches.map((item) => (
                                <li key={item.id}>
                                    {item.weather} {item.idFilm}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => addMatch(match2)}>add</button>
                        <button onClick={() => deleteMatch(match1)}>
                            delete
                        </button>
                        <button
                            onClick={() =>
                                modifyMatch({
                                    id: match3.id,
                                    weather: 'weather3',
                                    idFilm: 66,
                                })
                            }
                        >
                            modify
                        </button>
                    </>
                );
            };
        });
        test('Then it should list', async () => {
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            const element = screen.getByText(/testing/i);
            expect(element).toBeInTheDocument();
            const element2 = await screen.findAllByRole('listitem');
            expect(element2).toHaveLength(2);
            const element3 = screen.getAllByRole('button');
            expect(element3).toHaveLength(3);
        });
        test('Then it should get data from the context', () => {
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );
            expect(MatchHttpStore.prototype.getAllMatch).toHaveBeenCalled();
        });
        test('Then a new match should render if add button is clicked', async () => {
            MatchHttpStore.prototype.setMatch = jest
                .fn()
                .mockResolvedValue(match2);
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            userEvent.click(screen.getByText(/add/i));

            const element1 = await screen.findAllByRole('listitem');
            expect(element1).toHaveLength(3);
            const element2 = await screen.findByText(/weather3/i);
            expect(element2).toBeInTheDocument();
        });
        test('Then one match should not be rendered if delete button is clicked', async () => {
            MatchHttpStore.prototype.deleteMatch = jest
                .fn()
                .mockResolvedValue(match1);
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );
            userEvent.click(screen.getByText(/delete/i));
            const element = await screen.findAllByRole('listitem');
            expect(element).toHaveLength(1);
            const element2 = (await screen).queryByText(/weather1/i);
            expect(element2).toBeNull();
        });
        test('Then one match should be modified if modify button is clicked', async () => {
            MatchHttpStore.prototype.updateMatch = jest.fn().mockResolvedValue({
                id: match3.id,
                weather: 'weather3',
                idFilm: 66,
            });
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            userEvent.click(screen.getByText(/modify/i));
            const element = await screen.findByText(/66/);
            expect(element).toBeInTheDocument();
        });
    });
});
