import React, {FC} from 'react';
import styles from "./Movie.module.scss";
import {IMovie} from "../../../../types/types";
import Genres from "../../Genres/Genres";
import Rating, {RatingVariant} from "../../Rating/Rating";
import {useNavigate} from "react-router-dom";

interface MovieProps {
    movie: IMovie
    index?: number
}

const Movie: FC<MovieProps> = ({movie}) => {
    const navigate = useNavigate();
    const handleMoviePageOpen = () => navigate(`/home/${movie.id}`)

    // style={{ backgroundImage: `url(${movie?.poster?.url})` }
    return (
        <div className={styles.movie}>
            <img src={movie?.poster?.url} onClick={handleMoviePageOpen} alt="img"/>
            <h2 className={styles.movieTitle}>{movie.name}</h2>
            <Rating variant={RatingVariant.kp} {...movie}/>
            <Genres {...movie} />
        </div>
    );
};

export default Movie;