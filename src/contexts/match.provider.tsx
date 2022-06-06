import { ReactElement, useEffect, useReducer } from 'react';
import { iMatch } from '../models/interface';
import * as actions from '../reducers/match.action.creators';
import { matchReducer } from '../reducers/match.reducer';
import { MatchHttpStore } from '../services/match.http.store';
import { MatchContext } from './match.context';

export function MatchContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<iMatch> = [];
    const [matches, dispatch] = useReducer(matchReducer, initialState);
    const apiMatches = new MatchHttpStore('http://localhost:3000/matches');

    useEffect(() => {
        apiMatches
            .getAllData()
            .then((data) => dispatch(actions.loadMatchesActionCreator(data)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addMatch(match: iMatch) {
        apiMatches
            .setData(match)
            .then((resp) => dispatch(actions.addMatchActionCreator(resp)));
    }
    function deleteMatch(match: iMatch) {
        apiMatches
            .deleteData(match)
            .then((resp) => dispatch(actions.deleteMatchActionCreator(resp)));
    }
    function modifyMatch(match: iMatch) {
        apiMatches
            .updateData(match)
            .then((resp) => dispatch(actions.updateMatchActionCreator(resp)));
    }

    const context = { matches, addMatch, deleteMatch, modifyMatch };
    return (
        <MatchContext.Provider value={context}>
            {children}
        </MatchContext.Provider>
    );
}
