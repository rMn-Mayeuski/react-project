import React, {FC} from 'react';
import { IMovie } from '../../../../../types/types';

import styles from "./Rating.module.scss";

export enum RatingVariant {
    kp = "kp",
    imdb = "imdb"
}

interface RatingProps extends IMovie{
    variant: RatingVariant
}

const Rating = ({variant, rating}: RatingProps) => {
    const movieRatingKp = `${rating?.kp}`.split("");
    const movieRatingImdb = `${rating?.imdb}`.split("");

    return (
        <>
            {variant === RatingVariant.kp
                ?
                <span className={`${styles.rating} ${rating?.kp && (rating?.kp >= 7 ? styles.greenRating : rating?.kp <=5 ? styles.redRating : styles.rating)}`}>
                    {rating?.kp && movieRatingKp[0] + (movieRatingKp[1] || ".") + (movieRatingKp[2] || "0")}
                </span>
                :
                <span className={styles.ratingImdb}>
                    {rating?.imdb && movieRatingImdb[0] + (movieRatingImdb[1] || ".") + (movieRatingImdb[2] || "0")}
                </span>
            }
        </>
    );
};

export default Rating;