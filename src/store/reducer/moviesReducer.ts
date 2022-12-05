import {Reducer} from "redux";
import {IMovie} from "../../types/types";

enum MoviesActions {
    SET_MOVIES = "SET_MOVIES",
    SET_MOVIE = "SET_MOVIE",
    SHOW_MORE_MOVIES = "SHOW_MORE_MOVIES",
    SET_PAGE = "SET_PAGE",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_FAVORITE = "SET_FAVORITE",
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
        case MoviesActions.SET_MOVIES:
            return {...state, movieCards: action.payload}
        case MoviesActions.SET_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        case MoviesActions.DELETE_FAVORITES:
            return {...state, favorites: state.favorites.filter((item: IMovie) => item.id !== action.payload.id)}
        // case MoviesActions.SHOW_MORE_MOVIES:
        //     let arr = state.movieCards.concat(action.payload);
        //     return {...state, movieCards: arr}
        // case MoviesActions.SET_PAGE:
        //     return {...state, page: action.payload + 1 }
        case MoviesActions.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case MoviesActions.SET_FAVORITE:
            const array = state.movieCards.map((item: IMovie) => item)
            const oldMovie = array.find((movie: IMovie) => movie.id === action.payload.id)
            const movieIndex = array.indexOf(oldMovie)
            array.splice(movieIndex, 1, action.payload);
            return {...state, movieCards: array}
        default:
            return state
    }
}

export const setMoviesAction = (payload: IMovie[]) => ({type: MoviesActions.SET_MOVIES, payload});
// export const setShowMoreMovies = (payload: IMovie[]) => ({type: MoviesActions.SHOW_MORE_MOVIES, payload});
// export const setPageAction = (payload: any) => ({type: MoviesActions.SET_PAGE, payload});
export const setIsLoading = (payload: boolean) => ({type: MoviesActions.SET_IS_LOADING, payload});
export const setFavoriteMovie = (payload: IMovie) => ({type: MoviesActions.SET_FAVORITE, payload});
export const setFavorites = (payload: IMovie) => ({type: MoviesActions.SET_FAVORITES, payload});
export const delFavorites = (payload: IMovie) => ({type: MoviesActions.DELETE_FAVORITES, payload});




