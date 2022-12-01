import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { SelectedCardReducer } from "./reducers/selectedCardReducer";
import {moviesReducer} from "./reducers/moviesReducer";
import {movieReducer} from "./reducers/movieReducer";

const rootReducer = combineReducers({
    selectedCard: SelectedCardReducer,
    movieCards: moviesReducer,
    favorites: moviesReducer,
    movieCard: movieReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));