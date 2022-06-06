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

export interface iFilm {
    id: string;
    title: string;
    year: string;
    image: string;
    runtimeStr: string;
    plotLocal: string;
    directors: string;
    stars: string;
    genres: string;
    countries: string;
    imDbRating: string;
}

export interface iFilmResult {}
