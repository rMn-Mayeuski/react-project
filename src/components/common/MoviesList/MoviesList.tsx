import React, {FC, Suspense} from 'react';
import {IMovie} from "../../../types/types";
import Movie from './Movie/Movie';
import styles from "./MoviesList.module.scss";

interface MovieListProps {
    movies?: IMovie[]
}

const MoviesList: FC<MovieListProps> = ({movies = []}) => {

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