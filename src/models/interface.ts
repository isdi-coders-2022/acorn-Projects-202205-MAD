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
            finalText: spanishWeather;
        };
    };
}

export type spanishWeather = 'caluroso' | 'lluvia' | 'nieve' | 'soleado';

export interface iMatch {
    id: string;
    idFilm: number;
    weather: string;
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
