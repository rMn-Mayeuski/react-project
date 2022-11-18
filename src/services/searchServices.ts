import { IMovie, IMovieAPIResponse } from "../types/types";
import { responseToJSONHandler } from "../utils/responseUtil";
import HTTPService from "./HTTPService";

export interface ISearchResults {
    count: number,
    next: string | null,
    previous: string | null,
    results: IMovie[],
}

export default class SearchServices {
    static async getSearchResults( search: string = "", ): Promise<IMovieAPIResponse>  {
        return await HTTPService.get(`http://www.omdbapi.com/?s=${search}&apikey=b40ac0fc`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMovieAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}
