import {API_KEY, API_URL} from "../../constants/constants";
import {responseToJSONHandler} from "../../utils/responseUtil";
import { setMovieAction } from "../reducer/movieReducer";

export const getMovieCard = (id: number):any => {
    return (dispatch: any) => {
        fetch(`${API_URL}/movie?token=${API_KEY}&search=${id}&field=id`)
            .then(responseToJSONHandler)
            .then(res => dispatch(setMovieAction(res)))
            .catch(console.error)
    }
}