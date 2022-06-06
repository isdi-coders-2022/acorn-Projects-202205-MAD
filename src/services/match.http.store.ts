import { iMatch } from '../models/interface';

export class MatchHttpStore {
    constructor(public url: string) {}

    getData(id: string): Promise<iMatch> {
        return fetch(this.url + id).then((response) => response.json());
    }
    getAllData(): Promise<Array<iMatch>> {
        return fetch(this.url).then((response) => response.json());
    }
    setData(match: iMatch): Promise<iMatch> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateData(match: Partial<iMatch>): Promise<iMatch> {
        return fetch(this.url + match.id, {
            method: 'PATCH',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

    deleteData(match: iMatch): Promise<iMatch> {
        return fetch(this.url + match.id, {
            method: 'DELETE',
        }).then((response) => response.json());
    }
}
