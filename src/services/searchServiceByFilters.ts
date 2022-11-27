import { API_KEY, API_URL } from "../constants/constants"
import { IMovieAPIResponse } from "../types/types"
import { responseToJSONHandler } from "../utils/responseUtil"
import HTTPService from "./HTTPService"

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

    const genre = "боевик"
    const country = "США"
    const year = "2020"
    const rating = "2-6"
    
export default class SearchServicesByFilters {
    static async getSearchResults( search: string, limit: number, filters: IFilters ): Promise<IMovieAPIResponse & IQuery>  {
        return await HTTPService.get(`${API_URL}/movie?search[]=${country}&field[]=countries.name&search[]=${genre}&field[]=genres.name&token=${API_KEY}&field=rating.kp&search=${rating}&field=year&search=${year}&limit=${limit}&sortField=year&sortType=1&selectFields=genres countries name id poster rating`)
        .then(responseToJSONHandler)
        .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<IMovieAPIResponse> {
        return await HTTPService.get(url)
        .then(responseToJSONHandler)
        .catch(console.error)
    }
}