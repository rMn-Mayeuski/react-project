import {ChangeEventHandler, FormEventHandler, MouseEventHandler, ReactNode, ReactSVGElement} from "react";

export interface IWithChildren {
    children?: ReactNode,
}

export interface ScreenWidthValue {
    screenWidth: number
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
    usa: string;
    world: any;
}

interface IMovieBudget {
    value: number;
    currency: string;
}

export interface IMovieCountry {
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
    ratingMpaa?: string;
    sequelsAndPrequels?: IMovie[];
    shortDescription?: string;
    similarMovies?: IMovieSimilar[];
    slogan?: string;
    ticketsOnSale?: boolean;
    type?: string;
    typeNumber?: number;
    ageRating?: number;
    favorite?: boolean
}

export interface IMovieAPIResponse {
    docs: IMovie[]
    secondDocs: IMovie[]
    limit?: number
    page?: number
    pages?: number
    total?: number
}

export interface IBurgerMenuCondition {
    menuActive?: boolean;
    open?: boolean;
    handleClickAway?: MouseEventHandler;
    handleToggleBurgerMenu?: MouseEventHandler;
}

export interface ISearchFilterCondition {
    condition?: boolean
    onClick?: MouseEventHandler 
}

export interface INavTab {
    id?: number;
    title: string;
    icon?: ReactNode;
}

export interface INavTabProps extends INavTab {
    onClick: MouseEventHandler,
    className?: string;
    activeTabItem?: number,
}

export interface ITabsProps {
    config: INavTab[];
    activeTabItem: number;
    onClick: any;
}

export interface INotFound {
    text: string,
    isLoading?: boolean,
}

export interface ISearchProps {
    name?: string
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onSubmit?: FormEventHandler<HTMLFormElement>,
    onClick?: MouseEventHandler
}
