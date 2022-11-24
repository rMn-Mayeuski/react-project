import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { SelectedCardReducer } from "./reducers/selectedCardReducer";
import {moviesReducer} from "./reducers/moviesReducer";

const rootReducer = combineReducers({
    selectedCard: SelectedCardReducer,
    movieCards: moviesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));