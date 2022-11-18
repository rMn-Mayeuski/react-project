import React, { FC, useEffect, useState } from 'react';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import { wordsForMovieGenerate } from '../../constants/constants';
import MovieService from '../../services/movieService';
import { IMovie } from '../../types/types';
import { getRandomWord } from '../../utils/randomWordUtils';


const MainPage: FC = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const currentYear = new Date().getFullYear();

    const getMovies = async () => {
        const response = await MovieService.getMovies(getRandomWord(wordsForMovieGenerate), currentYear);
        const { Search } = response

        console.log(Search);

        return setMovies(Search)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <MoviesList movies={movies}/>
        </>
    );
};

export default MainPage;