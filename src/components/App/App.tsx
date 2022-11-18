import React, {FC, useEffect, useState} from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";

import MovieService from "../../services/movieService";
import MoviesList from "../common/MoviesList/MoviesList";
import {IMovie} from "../../types/types";

import AppRouter from './AppRoutes/AppRouter';


    const App: FC = () => {


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

    return (
        <MainWrapper>
            <AppRouter/>
        </MainWrapper>

    );
    };

export default App;