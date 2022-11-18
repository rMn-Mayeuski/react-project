import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import {getCurrentYear} from "../utils/currentYearUtil";
import { API_URL, API_KEY } from "../constants/constants";
import { IMovieAPIResponse } from "../types/types";

export default class MovieService {

    // static async getMovies(search: string, year: number): Promise<IMoviesAPIResponse> {
    //     return await HTTPService.get(`${API_URL}&y=${year}&s=${search}`)
    //         .then(responseToJSONHandler)
    //         .catch(console.error)
    // }

    static async getMovies(limit: number): Promise<IMovieAPIResponse> {
        return await HTTPService.get(`${API_URL}/movie?token=${API_KEY}&field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&limit=${limit}&sortField=year&sortType=-1&selectFields=genres name id poster rating`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    // static async getMoviesById(id: any): Promise<IMovieOptions> {
    //     return await HTTPService.get(`https://www.omdbapi.com/?apikey=b40ac0fc&y=2022&i=${id}`)
    //         .then(responseToJSONHandler)
    //         .catch(console.error)
    // }
}