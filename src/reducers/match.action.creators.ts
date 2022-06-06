import { iMatch } from '../models/interface';
import { MatchActionTypes } from './match.action.types';

//No es imprescindible pero ayuda:
export interface iAction {
    type: MatchActionTypes;
    data?: any;
}

export function loadMatchesActionCreator(matches: Array<iMatch>): iAction {
    return { type: MatchActionTypes['matches@load'], data: matches };
}
export function addMatchActionCreator(match: iMatch): iAction {
    return { type: MatchActionTypes['matches@add'], data: match };
}
export function updateMatchActionCreator(match: iMatch): iAction {
    return { type: MatchActionTypes['matches@update'], data: match };
}
export function deleteMatchActionCreator(match: iMatch): iAction {
    return { type: MatchActionTypes['matches@delete'], data: match };
}
