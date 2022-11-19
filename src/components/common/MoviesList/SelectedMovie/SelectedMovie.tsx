import React, {FC} from 'react';
import {IMovie} from "../../../../types/types";
import Genres from "../../Genres/Genres";
import Rating, {RatingVariant} from "../../Rating/Rating";
import SelectedMovieElements from "./SelectedMovieDescription/SelectedMovieElements";
import {useParams} from "react-router-dom";

import styles from "./SelectedMovie.module.scss";

interface SelectedMovieProps {
    movie: IMovie
}

const SelectedMovie: FC<SelectedMovieProps> = ({movie}) => {
    const {id = 1} = useParams();
    return (
        <div className={styles.movieTopBlock}>
            <div className={styles.movieLeftSide}>
                <img src={movie.poster?.url} alt="img"/>
                <div className={styles.actionButtons}>
                    {/*<button>*/}
                    {/*    <svg></svg>*/}
                    {/*</button>*/}
                    {/*<button>*/}
                    {/*    <svg></svg>*/}
                    {/*</button>*/}
                </div>
            </div>
            <div className={styles.movieRightSide}>
                <Genres {...movie}/>
                <h2 className={styles.movieTitle}>{movie.name}</h2>
                <div className={styles.movieMarkers}>
                    {!!movie.rating?.kp && <Rating variant={RatingVariant.kp} {...movie}/>}
                    {!!movie.rating?.imdb && <Rating variant={RatingVariant.imdb} {...movie}/>}
                    <div className={styles.movieRuntime}>{`${movie.movieLength} min`}</div>
                </div>
                <p className={styles.movieDescription}>{movie.description}</p>
                <SelectedMovieElements movie={movie}/>
            </div>
        </div>
    );
};

export default SelectedMovie;