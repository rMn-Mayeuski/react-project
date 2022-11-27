import React, {FC} from 'react';
import Movie from "./Movie/Movie";
import {IMovie} from "../../../types/types";

import styles from "./MoviesList.module.scss";

interface MovieListProps {
    movies?: IMovie[]
    query?: string,
}

const MoviesList: FC<MovieListProps> = ({movies = [], query = ""}) => {

    return (
        <div className={styles.movies}>
            {movies.map((movie, index) => {
                return (
                    <Movie
                        movie={movie}
                        key={movie.id}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;