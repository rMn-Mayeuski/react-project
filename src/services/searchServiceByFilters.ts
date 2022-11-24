import { API_KEY, API_URL } from "../constants/constants"
import { IMovieAPIResponse } from "../types/types"
import { responseToJSONHandler } from "../utils/responseUtil"
import HTTPService from "./HTTPService";

    interface IGenres {
        label: string;
        value: string;
    }
    
    interface IFilters {
        rating: number[];
        year: number[];
        sortBy?: string;
        genres: IGenres[];
    }
    
    export interface IBaseQuery {
        type?: number;
        query?: string;
        limit?: number;
        page?: number;
    }
    
    export interface IQuery extends IBaseQuery {
        filters: IFilters;
        name?: string | string[] | undefined;
        id?: string | string[] | undefined;
    }
    
export default class SearchServicesByFilters {
    static async getSearchResults( 

        search: string,
        country: string, 
        genre: string, 
        rating: string,
        year: string,
        limit: number,

        ): Promise<IMovieAPIResponse>  {
        return await HTTPService.get(`${API_URL}/movie?field=name&search=${search}&field=countries.name&search=${country}&field=genres.name&search=${genre}&field=rating.kp&search=${rating}&field=year&search=${year}&limit=${limit}&isStrict=false&selectFields=genres countries name id poster rating &token=${API_KEY}`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMovieAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}