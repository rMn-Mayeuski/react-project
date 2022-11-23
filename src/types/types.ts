import { MouseEventHandler, ReactNode } from "react";

export interface IWithChildren {
    children: ReactNode,
}

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

interface IMoviePremiere {
    country: string;
    world: string;
}

interface IMovieFees {
    usa: any;
    world: any;
}

interface IMovieBudget {
    value: number;
    currency: string;
}

interface IMovieCountry {
    name?: string;
}

interface IMovieName {
    name: string;
}

export interface IMovieSimilar {
    id: number;
    name: string;
    poster: IMoviePoster;
}

export interface IMoviePerson {
    id: number;
    name: string;
    enName: string;
    description: string;
    enProfession:
        | "director"
        | "actor"
        | "design"
        | "producer"
        | "composer"
        | "editor";
    photo: string;
}

export interface IMovie {
    id?: number
    name?: string
    alternativeName?: string;
    poster?: IMoviePoster
    rating?: IMovieRating
    genres?: IMovieGenre[]
    movieLength?: number;
    description?: string;
    year?: number;
    premiere?: IMoviePremiere;
    fees?: IMovieFees;
    budget?: IMovieBudget;
    countries?: IMovieCountry[];
    names?: IMovieName[];
    productionCompanies?: any[];
    persons?: IMoviePerson[];
    ratingMpaa?: any;
    sequelsAndPrequels?: IMovie[];
    shortDescription?: string;
    similarMovies?: IMovieSimilar[];
    slogan?: any;
    ticketsOnSale?: boolean;
    type?: string;
    typeNumber?: number;
    ageRating?: number;
    favorite?: boolean
}

export interface IMovieAPIResponse {
    docs: IMovie[];
    limit?: number
    page?: number
    pages?: number
    total?: number
}

export interface IBurgerMenuСondition {
    menuActive?: boolean;
    open?: boolean;
    handleClickAway?: MouseEventHandler;
    handleToggleBurgerMenu?: MouseEventHandler;
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

