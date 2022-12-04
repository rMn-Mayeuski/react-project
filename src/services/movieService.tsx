import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import { API_URL, API_KEY } from "../constants/constants";
import {IMovie, IMovieAPIResponse} from "../types/types";
import { getCurrentYear } from "../utils/currentYearUtil";
export default class MovieService {

    static async getMovies(limit: number, page: number): Promise<IMovieAPIResponse> {
        return await HTTPService.get(`${API_URL}/movie?token=${API_KEY}&field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&limit=${limit}&page=${page}&sortField=year&sortType=1&selectFields=genres year name description alternativeName id poster rating`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async getTrendMovies(limit: number, page: number): Promise<IMovieAPIResponse> {
        return await HTTPService.get(`${API_URL}/movie?token=${API_KEY}&field=year&search=2020-${getCurrentYear()}&limit=${limit}&page=${page}&sortField=votes.imdb&sortType=-1&sortField=year&sortType=-1&sortField=rating.kp&sortType=-1&selectFields=genres year name description alternativeName id poster rating`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async getMovieById(id: number): Promise<IMovie> {
        return await HTTPService.get(`${API_URL}/movie?token=${API_KEY}&search=${id}&field=id`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    // static async getMoviesById(id: any): Promise<IMovieOptions> {
    //     return await HTTPService.get(`https://www.omdbapi.com/?apikey=b40ac0fc&y=2022&i=${id}`)
    //         .then(responseToJSONHandler)
    //         .catch(console.error)
    // }
}