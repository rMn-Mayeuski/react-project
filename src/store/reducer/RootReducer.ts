import {createStore, combineReducers} from "redux";
import { SelectedCardReducer } from "./selectedCardReducer";

const rootReducer = combineReducers({
    selectedCard: SelectedCardReducer,
});

export const store = createStore(rootReducer);