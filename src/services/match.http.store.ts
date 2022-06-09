import { iMatch } from '../models/interface';

export class MatchHttpStore {
    constructor(public url: string) {}

    getMatch(id: string): Promise<iMatch> {
        return fetch(this.url + id).then((response) => response.json());
    }
    getAllMatch(nickname: string): Promise<Array<iMatch>> {
        return fetch(this.url + '?user=' + nickname).then((response) =>
            response.json()
        );
    }
    setMatch(match: iMatch): Promise<iMatch> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateMatch(match: Partial<iMatch>): Promise<iMatch> {
        return fetch(this.url + match.id, {
            method: 'PATCH',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

    deleteMatch(match: iMatch): Promise<iMatch> {
        return fetch(this.url + match.id, {
            method: 'DELETE',
        }).then((response) => response.json());
    }
}
