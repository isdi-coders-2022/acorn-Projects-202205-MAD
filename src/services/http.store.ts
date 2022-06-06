import { iMatch } from '../models/interface';

export class HttpStore {
    constructor(public url: string) {}

    getData(id: string) {
        return fetch(this.url + id).then((response) => response.json());
    }
    getAllData() {
        return fetch(this.url).then((response) => response.json());
    }
    setData(match: iMatch) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateData(match: Partial<iMatch>) {
        return fetch(this.url + match.id, {
            method: 'PATCH',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }

    deleteData(match: iMatch) {
        return fetch(this.url + match.id, {
            method: 'DELETE',
        }).then((response) => response.json());
    }
}
