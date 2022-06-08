import { createContext } from 'react';
import { iMatch } from '../models/interface';

const initialContext: {
    matches: Array<iMatch>;
    addMatch: (match: iMatch) => void;
    deleteMatch: (match: iMatch) => void;
    modifyMatch: (match: Partial<iMatch>) => void;
} = {
    matches: [],
    addMatch: () => {},
    deleteMatch: () => {},
    modifyMatch: () => {},
};

export const MatchContext = createContext(initialContext);
