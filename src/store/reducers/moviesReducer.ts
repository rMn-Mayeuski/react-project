import {Reducer} from "redux";
import {IMovie} from "../../types/types";

enum MoviesActions {
    SET_MOVIES = "SET_MOVIES",
    SHOW_MORE_MOVIES = "SHOW_MORE_MOVIES",
    SET_PAGE = "SET_PAGE"
}

interface IInitialState {
    movieCards: IMovie[]
    page: number
}

const initialState: IInitialState = {
    movieCards: [],
    page: 1
}

export const moviesReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MoviesActions.SET_MOVIES:
            return {...state, movieCards: action.payload}
        case MoviesActions.SHOW_MORE_MOVIES:
            const arr = state.movieCards.concat(action.payload);
            return {...state, movieCards: arr}
        case MoviesActions.SET_PAGE:
            return {...state, page: action.payload + 1 }
        default:
            return state
    }
}

export const setMoviesAction = (payload: IMovie[]) => ({type: MoviesActions.SET_MOVIES, payload});
export const setShowMoreMovies = (payload: IMovie[]) => ({type: MoviesActions.SHOW_MORE_MOVIES, payload});
export const setPageAction = (payload: any) => ({type: MoviesActions.SET_PAGE, payload});

