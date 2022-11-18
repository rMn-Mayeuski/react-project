import React, {FC} from 'react';
import Movie from "./Movie/Movie";
import {IMovie} from "../../../types/types";

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