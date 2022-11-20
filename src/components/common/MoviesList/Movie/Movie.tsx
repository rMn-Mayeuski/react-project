import React, {FC} from 'react';
import styles from "./Movie.module.scss";
import {IMovie} from "../../../../types/types";
import Genres from "./Genres/Genres";
import Rating from "./Rating/Rating";

interface MovieProps {
    movie: IMovie
    index?: number
}

const Movie: FC<MovieProps> = ({movie}) => {
    // style={{ backgroundImage: `url(${movie?.poster?.url})` }
    return (
        <div className={styles.movie}>
            <img src={movie?.poster?.url} alt="img"/>
            <h2 className={styles.movieTitle}>{movie.name}</h2>
            <Rating {...movie}/>
            <Genres {...movie} />
        </div>
    );
};

export default Movie;