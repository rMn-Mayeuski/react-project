import { responseToJSONHandler } from "../utils/responseUtil";
import {IMovie, IMoviesAPIResponse} from "../types/types";
import HTTPService from "./HTTPService";

export interface ISearchResults {
    count: number,
    next: string | null,
    previous: string | null,
    results: IMovie[],
}

export default class SearchServices {
    static async getSearchResults( search: string = "", ): Promise<IMoviesAPIResponse>  {
        return await HTTPService.get(`http://www.omdbapi.com/?s=${search}&apikey=b40ac0fc`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMoviesAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}
