import React, {FC} from 'react';
import {IMovie} from "../../../../../types/types";

import styles from "./Rating.module.scss";

const Rating: FC<IMovie> = ({rating}) => {
    const roundedRating = Math.floor(rating.kp * 10) / 10;

    return (
        <span className={`${styles.rating} ${rating?.kp >= 7 ? styles.greenRating : rating?.kp <=5 ? styles.redRating : styles.rating}`}>
            {rating?.kp && roundedRating}
        </span>
    );
};

export default Rating;