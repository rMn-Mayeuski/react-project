import { ReactNode } from "react";

export interface IMoviePoster {
    url: string;
    previewUrl: string;
}

export interface IMovieRating {
    kp: number;
    imdb: number;
}

export interface IMovieGenre {
    _id: string
    name: string;
}


export interface IMovie {
    id: string
    name: string
    poster: IMoviePoster
    rating: IMovieRating
    genres: IMovieGenre[]
}

export interface IMovieAPIResponse {
    docs: IMovie[];
    limit?: number
    page?: number
    pages?: number
    total?: number
}

export interface IWithChildren {
    children: ReactNode,
}

export interface INavTab {
    id: number;
    title: string;
    icon: any;
}
export interface INavTabProps extends INavTab {
    activeTabItem: number,
    onClick: any,
}
export interface ITabsProps {
    config: INavTab[];
    activeTabItem: number;
    onClick: any;
}

