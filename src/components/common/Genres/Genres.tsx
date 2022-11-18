import React, {FC} from 'react';
import {IMovie, IMovieGenre} from "../../../types/types";

import styles from "./Genres.module.scss";

const Genres: FC<IMovie> = ({genres}) => {
    return (
        <div className={styles.genres}>
            {genres.map((item) => (
                <p key={item._id}>{`${item.name[0].toUpperCase()}${item.name.slice(1)}`}</p>
            ))}
        </div>
    );
};

export default Genres;