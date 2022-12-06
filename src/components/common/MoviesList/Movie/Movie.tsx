import React, {FC} from 'react';
import styles from "./Movie.module.scss";
import {IMovie} from "../../../../types/types";
import {useNavigate} from "react-router-dom";
import Rating, {RatingVariant} from './Rating/Rating';
import Genres from './Genres/Genres';
import FavoriteButton, {FavoriteButtonVariant} from "../../FavoriteButton/FavoriteButton";
import posterNotFound from "../../../../assets/img/PosterNotFound.jpg"

interface MovieProps {
    movie: IMovie
    index?: number
    onClick?: () => void
}

const Movie: FC<MovieProps> = ({movie}) => {

    const navigate = useNavigate();
    const handleMoviePageOpen = () => navigate(`/home/${movie?.id}`)

return (
        <div className={styles.movie}>
            <img 
                src={movie?.poster?.url ? movie?.poster?.url : posterNotFound}
                onClick={handleMoviePageOpen} 
                alt="img"
            />
            <h2 className={styles.movieTitle}>{movie.name ? movie.name : movie.alternativeName}</h2>
            <div className={styles.movieRating}>
                {!!movie?.rating?.kp
                    ?
                    <Rating variant={RatingVariant.kp} {...movie}/>
                    :
                    !!movie.rating?.imdb
                    ?
                    <Rating variant={RatingVariant.imdb} {...movie}/>
                        :
                        null
                }
            </div>
            {movie.favorite &&  <FavoriteButton movie={movie} variant={FavoriteButtonVariant.forHomePage} className={styles.movieFavorite}/>}
            <Genres {...movie} />
        </div>
    );
};

export default Movie;