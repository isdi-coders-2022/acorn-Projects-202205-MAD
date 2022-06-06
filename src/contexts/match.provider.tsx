import { ReactElement, useEffect, useMemo, useReducer } from 'react';
import { iMatch } from '../models/interface';
import * as actions from '../reducers/match.action.creators';
import { matchReducer } from '../reducers/match.reducer';
import { MatchHttpStore } from '../services/match.http.store';
import { MatchContext } from './match.context';

export function MatchContextProvider({ children }: { children: ReactElement }) {
    const initialState: Array<iMatch> = [];
    const [matches, dispatch] = useReducer(matchReducer, initialState);
    const apiMatches = useMemo(
        () => new MatchHttpStore('http://localhost:3000/matches'),
        []
    );
    useEffect(() => {
        apiMatches
            .getAllMatch()
            .then((data) => dispatch(actions.loadMatchesActionCreator(data)));
    }, [apiMatches]);

    function addMatch(match: iMatch) {
        apiMatches
            .setMatch(match)
            .then((resp) => dispatch(actions.addMatchActionCreator(resp)));
    }
    function deleteMatch(match: iMatch) {
        apiMatches
            .deleteMatch(match)
            .then((resp) => dispatch(actions.deleteMatchActionCreator(resp)));
    }
    function modifyMatch(match: iMatch) {
        apiMatches
            .updateMatch(match)
            .then((resp) => dispatch(actions.updateMatchActionCreator(resp)));
    }

    const context = { matches, addMatch, deleteMatch, modifyMatch };
    return (
        <MatchContext.Provider value={context}>
            {children}
        </MatchContext.Provider>
    );
}
