import React, {FC, Suspense} from 'react';
import {IMovie} from "../../../types/types";
import Movie from './Movie/Movie';

interface MovieListProps {
    movies?: IMovie[]
    query?: string,
}

const MoviesList: FC<MovieListProps> = ({movies = [], query = ""}) => {

    return (
        <>
            {movies.map((movie, index) => {
                return (
                    <Movie
                        movie={movie}
                        key={movie.id}
                        index={index}
                    />
                );
            })}
        </>
    );
};

export default MoviesList;