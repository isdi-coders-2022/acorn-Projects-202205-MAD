import { iMatch } from './interface';

export class Match implements iMatch {
    id: string;
    constructor(public weather: string, public idFilm: string) {
        this.id = Match.generateId();
    }
    static generateId(): string {
        return Math.round(Math.random() * 10_000_000).toString();
    }
}
