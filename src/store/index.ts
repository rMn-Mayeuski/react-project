import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducer/movieReducer";
import { moviesReducer } from "./reducer/moviesReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    movieCards: moviesReducer,
    favorites: moviesReducer,
    movieCard: movieReducer,
    user: userReducer,
});

export const store = createStore(rootReducer, (applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof store.getState>;
export const getUser = ({ user }: RootStore) => user;