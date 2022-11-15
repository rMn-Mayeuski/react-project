import React, { FC, MouseEventHandler } from 'react';
import styles from "./MovieCard.module.scss"

export interface IMovieCardProps {
    id: number,
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    onClick?: MouseEventHandler,
    favorite?: boolean,
}

const MovieCard: FC<IMovieCardProps> = (props) => {
    return (
        <div>
            <img src={props.Poster} alt="Poster" />
            <p>{props.Title}</p>
            <p>{props.Type}</p>
            <p>{props.Year}</p>
        </div>
    );
};

export default MovieCard;