export interface iWeather {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
    };
}

export type spanishWeather =
    | 'Caluroso'
    | 'Lluvia'
    | 'Nieve'
    | 'Soleado'
    | 'Frio y nublado';
export interface iMatch {
    id: string;
    idFilm: number;
    weather: string;
    user: string;
}

export interface iFilm {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
}

export interface iFilmSearch {
    results: Array<iFilm>;
}

export interface iVideo {
    id: number;
    results: Array<{
        key: string;
        type: string;
    }>;
}
