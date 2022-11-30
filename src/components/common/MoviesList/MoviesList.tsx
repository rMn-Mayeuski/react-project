import React, {FC, Suspense} from 'react';
import {IMovie} from "../../../types/types";

import styles from "./MoviesList.module.scss";

interface MovieListProps {
    movies?: IMovie[]
    query?: string,
}

const Movie = React.lazy(() => import("./Movie/Movie"));

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