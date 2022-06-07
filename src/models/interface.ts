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
    video: false;
    vote_average: number;
}

export interface iFilmSearch {
    results: Array<iFilm>;
}
