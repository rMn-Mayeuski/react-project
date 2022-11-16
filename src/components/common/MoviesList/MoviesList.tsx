import React, {FC} from 'react';
import Movie from "./Movie/Movie";
import {IMovie} from "../../../types/types";

interface MovieListProps {
    movies: IMovie[]
}

const MoviesList: FC<MovieListProps> = ({movies}) => {

    return (
        <div>
            {movies.map((movie, index) => {
                return (
                    <Movie
                        movie={movie}
                        key={movie.imdbID}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;