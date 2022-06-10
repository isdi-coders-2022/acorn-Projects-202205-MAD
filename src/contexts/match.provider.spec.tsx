import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { Match } from '../models/Match';
import { MatchHttpStore } from '../services/match.http.store';
import { MatchContext } from './match.context';
import { MatchContextProvider } from './match.provider';

jest.mock('../services/match.http.store');

const match1 = new Match('weather1', 0, 'user');
const match2 = new Match('weather2', 1, 'user');
const match3 = new Match('weather3', 2, 'user');

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
        test('Then it should rendered', () => {
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            const element = screen.getByText(/testing/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should add function is called', async () => {
            MatchHttpStore.prototype.setMatch = jest
                .fn()
                .mockResolvedValue(match2);
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            userEvent.click(screen.getByText(/add/i));
            expect(MatchHttpStore.prototype.setMatch).toHaveBeenCalled();
            const element = await screen.findByText(/weather2/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should delete function is called', async () => {
            MatchHttpStore.prototype.deleteMatch = jest
                .fn()
                .mockResolvedValue(match1);
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            userEvent.click(screen.getByText(/delete/i));
            expect(MatchHttpStore.prototype.deleteMatch).toHaveBeenCalled();
            const element = (await screen).queryByText(/weather1/i);
            expect(element).toBeNull();
        });
        test('Then it should modify function is called', () => {
            MatchHttpStore.prototype.updateMatch = jest.fn().mockResolvedValue({
                match3,
            });
            render(
                <MatchContextProvider>
                    <MockComponent />
                </MatchContextProvider>
            );

            userEvent.click(screen.getByText(/modify/i));
            expect(MatchHttpStore.prototype.updateMatch).toHaveBeenCalled();
        });
    });
});
