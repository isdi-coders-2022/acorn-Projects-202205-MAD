import { Match } from '../models/Match';
import { MatchHttpStore } from './match.http.store';

const match1 = new Match('weather1', 0, 'user');
const match2 = new Match('weather2', 1, 'user');
const match3 = new Match('weather3', 2, 'user');

describe('Given MatchHttpStore service', () => {
    describe('When called getMatch', () => {
        test('Then it should return a match', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(match1),
            });
            const api = new MatchHttpStore('');
            const response = await api.getMatch('');
            expect(response).toEqual(match1);
        });
    });
    describe('When called getAllMatch', () => {
        test('Then it should return a match array', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([match1, match3]),
            });
            const api = new MatchHttpStore('');
            const response = await api.getAllMatch('');
            expect(response).toEqual([match1, match3]);
        });
    });
    describe('When called setMatch', () => {
        test('Then it should return a match', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(match2),
            });
            const api = new MatchHttpStore('');
            const response = await api.setMatch(match2);
            expect(response).toEqual(match2);
        });
    });
    describe('When called updateMatch with a partial match', () => {
        test('Then it should return a match', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest
                    .fn()
                    .mockResolvedValue({ ...match1, weather: 'weather2' }),
            });
            const api = new MatchHttpStore('');
            const response = await api.updateMatch({
                ...match1,
                weather: 'weather2',
            });
            const expectedResponse = { ...match1, weather: 'weather2' };
            expect(response).toEqual(expectedResponse);
        });
    });
    describe('When called deleteMatch', () => {
        test('Then it should return a match', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(match3),
            });
            const api = new MatchHttpStore('');
            const response = await api.deleteMatch(match3);
            expect(response).toEqual(match3);
        });
    });
});
