import { API_KEY, API_URL } from "../constants/constants"
import { IMovieAPIResponse } from "../types/types"
import { responseToJSONHandler } from "../utils/responseUtil"
import HTTPService from "./HTTPService";

export default class SearchServicesByFilters {
    static async getSearchResults( 

    search: string,
    country: string, 
    genre: string, 
    ratingFrom: string,
    ratingTo: string,
    yearFrom: string,
    yearTo: string,
    sortBy: string,
    limit: number,

    ): Promise<IMovieAPIResponse>  {
        return await HTTPService.get(`${API_URL}/movie?field=name&search=${search}&field=countries.name&search=${country}&field=genres.name&search=${genre}&field=rating.kp&search=${ratingFrom}-${ratingTo}&field=year&search=${yearFrom}-${yearTo}&limit=${limit}&${sortBy}&isStrict=false&selectFields=genres countries name id poster rating &token=${API_KEY}`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMovieAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}