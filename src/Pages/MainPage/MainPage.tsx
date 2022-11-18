import React, { FC, useEffect, useState } from 'react';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import MovieService from '../../services/movieService';
import { IMovie } from '../../types/types';


const MainPage: FC = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const getMovies = async () => {
        const response = await MovieService.getMovies( 10);

        const { docs } = response;

        console.log(docs);

        return setMovies(docs)
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