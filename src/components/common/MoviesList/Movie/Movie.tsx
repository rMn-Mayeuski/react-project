import React, {FC} from 'react';
import styles from "./Movie.module.scss";
import {IMovie} from "../../../../types/types";

interface MovieProps {
    movie: IMovie
    index: number
}

const Movie: FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <div>
                <img src={movie.Poster} alt="img"/>
            </div>
            <h2 className={styles.title}>{movie.Title}</h2>
        </div>
    );
};

export default Movie;