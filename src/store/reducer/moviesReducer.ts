import {Reducer} from "redux";
import {IMovie} from "../../types/types";

enum MoviesActions {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_FAVORITES = "SET_FAVORITES",
    DELETE_FAVORITES = "DELETE_FAVORITES"
}

interface IInitialState {
    movieCards: IMovie[]
    favorites: IMovie[]
    page: number
    isLoading: boolean
}

const initialState: IInitialState = {
    movieCards: [],
    favorites: [],
    page: 1,
    isLoading: false
}

export const moviesReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MoviesActions.SET_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        case MoviesActions.DELETE_FAVORITES:
            return {...state, favorites: state.favorites.filter((item: IMovie) => item.id !== action.payload.id)}
        case MoviesActions.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const setIsLoadingAction = (payload: boolean) => ({type: MoviesActions.SET_IS_LOADING, payload});
export const setFavoritesAction = (payload: IMovie) => ({type: MoviesActions.SET_FAVORITES, payload});
export const delFavoritesAction = (payload: IMovie) => ({type: MoviesActions.DELETE_FAVORITES, payload});




