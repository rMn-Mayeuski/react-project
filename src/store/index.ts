import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {moviesReducer} from "./reducers/moviesReducer";
import {movieReducer} from "./reducers/movieReducer";

const rootReducer = combineReducers({
    movieCards: moviesReducer,
    favorites: moviesReducer,
    movieCard: movieReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));