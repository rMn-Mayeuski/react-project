import React, {FC, useEffect, useState} from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";
import MovieService from "../../services/movieService";
import MoviesList from "../common/MoviesList/MoviesList";
import {IMovie} from "../../types/types";

    const App: FC = () => {
        const [movies, setMovies] = useState<IMovie[]>([]);

        const getMovies = async () => {
            const response = await MovieService.getMovies( 10);

            const { docs } = response;

            return setMovies(docs)

        }

        useEffect(() => {
            getMovies()
        }, [])

        return (
            <MainWrapper>
                <MoviesList movies={movies}/>
            </MainWrapper>
    );
    };

export default App;