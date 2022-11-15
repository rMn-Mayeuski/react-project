import React, {FC, useEffect, useState} from 'react';
import MainWrapper from '../common/MainWrapper/MainWrapper';
import "./App.scss";
import MovieService from "../../services/movieService";
import MoviesList from "../common/MoviesList/MoviesList";
import {IMovie} from "../../types/types";
import {getRandomWord} from "../../utils/randomWordUtils";
import {wordsForMovieGenerate} from "../../constants/constants";

const App: FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const currentYear = new Date().getFullYear();

    const getMovies = async () => {
        const response = await MovieService.getMovies(getRandomWord(wordsForMovieGenerate), currentYear);
        const { Search } = response

        return setMovies(Search)
     }


    useEffect(() => {
        getMovies()
     }, [])

    return (
        <MainWrapper>
            <div>
                <MoviesList movies={movies}/>
            </div>
        </MainWrapper>
  );
};

export default App;