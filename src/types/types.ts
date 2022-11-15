import { ReactNode } from "react";

export interface IWithChildren {
    children: ReactNode,
}

export interface IMoviesAPIResponse {
    Search: IMovie[];
    Response: null | string;
    totalResults: null | string;
}

export enum MovieVariant {
    movie = "movie",
    series = "series",
    episode = "episode"
}

export interface IMovie {
    Poster: string
    Title: string
    Year: string
    imdbID: string
    Type: MovieVariant
}

export interface IMovieOptions {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string
    Writer: string;
    Actors: string
    Plot: string;
    Language: string;
    Country: string
    Awards: string
    Poster: string;
    Production: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    Response: string;
    DVD?: string
    BoxOffice?: string
    Website?: string;
    totalSeasons?: string;
}
