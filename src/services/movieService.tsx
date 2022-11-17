import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import {IMovie, IMoviesAPIResponse} from "../types/types";
import {API_URL} from "../constants/constants";

export default class MovieService {
    static async getMovies(search: string, year: number): Promise<IMoviesAPIResponse> {
        return await HTTPService.get(`${API_URL}&s=${search}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async getMoviesById(id: any): Promise<IMoviesAPIResponse & IMovie> {
        return await HTTPService.get(`https://www.omdbapi.com/?apikey=b40ac0fc&y=2022&t=${id}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}