import React, {FC} from 'react';
import styles from "./Movie.module.scss";
import {IMovie} from "../../../../types/types";

interface MovieProps {
    movie: IMovie
    index: number
}

const Movie: FC<MovieProps> = ({movie}) => {
    return (
        <div className={styles.movie}>
            <img src={movie.Poster} alt="img"/>
            <h2 className={styles.movieTitle}>{movie.Title}</h2>
            <ul className={styles.movieSubtitle}>
                <li>{movie.Type}</li>
                <li className={styles.movieSubtitleSeparator}>{movie.Year}</li>
            </ul>
        </div>
    );
};

export default Movie;