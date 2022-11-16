import { Reducer } from "redux";
import { IMovieCardProps } from "../../components/common/MovieCard/MovieCard";

enum SelectedCardActions {
    SELECT_CARD = "SELECT_CARD",
    SELECT_IMG = "SELECT_IMG",
    SET_CARDS = "SET_CARDS",
    UPDATE_CARD = "UPDATE_CARD",
}

export interface initialStateType {
    selectedCard: IMovieCardProps | null,
    cards: IMovieCardProps[]
}

const initialState: initialStateType = {
    selectedCard: null,
    cards: []
}

export const SelectedCardReducer: Reducer = ((state = initialState, action) => {
    switch (action.type) {
        case SelectedCardActions.SELECT_CARD:
            if (action.payload) {
                return {...state, selectedCard: action.payload};
            } else {
                return {...state, selectedCard: initialState.selectedCard};
            }
        case SelectedCardActions.SET_CARDS:
            return {...state, cards: action.payload}

        case SelectedCardActions.UPDATE_CARD:
            const arr = state.cards.map((item: IMovieCardProps) => item)
            const oldCard = arr.find((card: IMovieCardProps) => card.id === action.payload.id)
            const cardIndex = arr.indexOf(oldCard)
            arr.splice(cardIndex, 1, action.payload);
            return {...state, cards: arr}

        default: return state
    }
})

export const selectCardAction = (payload: any) => ({type: SelectedCardActions.SELECT_CARD, payload});
export const setCardsAction = (payload: IMovieCardProps[]) => ({type: SelectedCardActions.SET_CARDS, payload});
export const updateCardAction = (payload: IMovieCardProps) => ({type: SelectedCardActions.UPDATE_CARD, payload});