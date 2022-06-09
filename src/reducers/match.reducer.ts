//Aquí se define el estado
//Tipando el state de entrada

import { iMatch } from '../models/interface';
import { iAction } from './match.action.creators';
import { MatchActionTypes } from './match.action.types';

export function matchReducer(initialState: Array<iMatch>, action: iAction) {
    let state: Array<iMatch>;
    switch (action.type) {
        case MatchActionTypes['matches@load']:
            state = action.data;
            break;
        case MatchActionTypes['matches@add']:
            state = [...initialState, action.data];
            break;
        case MatchActionTypes['matches@update']:
            state = initialState.map((item) =>
                item.id === action.data.id ? action.data : item
            );
            break;
        case MatchActionTypes['matches@delete']:
            console.log('action', action.data);

            state = initialState.filter((item) => item.id !== action.data.id);
            break;
        default:
            state = initialState;
    }
    return state;
}
