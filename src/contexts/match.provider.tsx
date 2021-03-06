import { useAuth0 } from '@auth0/auth0-react';
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
        () => new MatchHttpStore('http://localhost:4500/matches/'),
        []
    );
    const { isAuthenticated, user } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            apiMatches
                .getAllMatch(user?.nickname as string)
                .then((data) =>
                    dispatch(actions.loadMatchesActionCreator(data))
                );
        }
    }, [apiMatches, isAuthenticated, user?.nickname]);

    function addMatch(match: iMatch) {
        apiMatches
            .setMatch(match)
            .then((resp) => dispatch(actions.addMatchActionCreator(resp)));
    }
    function deleteMatch(match: iMatch) {
        apiMatches
            .deleteMatch(match)
            .then(() => dispatch(actions.deleteMatchActionCreator(match)));
    }
    function modifyMatch(match: Partial<iMatch>) {
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
