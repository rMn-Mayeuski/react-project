import { API_KEY, API_URL } from "../constants/constants";
import { IMovie, IMovieAPIResponse } from "../types/types";
import { responseToJSONHandler } from "../utils/responseUtil";
import HTTPService from "./HTTPService";


export default class SearchServices {
    static async getSearchResults( search: string, limit: number ): Promise<IMovieAPIResponse>  {
        return await HTTPService.get(`${API_URL}/movie?search=${search}&field=name&limit=${limit}&sortField=rating.kp&sortType=-1&isStrict=false&selectFields=genres name id poster rating &token=${API_KEY}`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMovieAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}
