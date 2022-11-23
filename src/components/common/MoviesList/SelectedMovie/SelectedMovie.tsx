import React, {FC, useEffect, useState} from 'react';
import {IMovie, IMovieSimilar} from "../../../../types/types";
import SelectedMovieElements from "./SelectedMovieElements/SelectedMovieElements";

import styles from "./SelectedMovie.module.scss";
import Genres from '../Movie/Genres/Genres';
import Rating, { RatingVariant } from '../Movie/Rating/Rating';
import Slider from "../../Slider/Slider";
import {SwiperSlide} from "swiper/react";
import Movie from "../Movie/Movie";
import {useParams} from "react-router-dom";
import MovieService from "../../../../services/movieService";

interface SelectedMovieProps {
    movie: IMovie
}

const SelectedMovie: FC<SelectedMovieProps> = ({movie}) => {
    // const {
    //     name,
    //     rating,
    //     similarMovies,
    //     id,
    //     fees,
    //     genres,
    //     budget,
    //     movieLength,
    //     countries,
    //     description,
    //     premiere,
    //     poster,
    //     sequelsAndPrequels,
    //     year
    //     } = props;

    const similars = movie.similarMovies?.filter((item: IMovieSimilar) =>
        item.name?.length ? item : undefined
    );

    return (
       <div>
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
           <div className={styles.movieBottomBlock}>
               {/*<div>*/}
               {/*    {movie.similarMovies?.map((item) => (*/}
               {/*        <Movie movie={item} key={item.id}/>*/}
               {/*    ))}*/}
               {/*</div>*/}
               <Slider>
                   {!!similars?.length && similars?.map((elem) => (
                       <SwiperSlide key={elem.id}>
                           <Movie movie={elem} key={elem.id}/>
                       </SwiperSlide>
                   ))}
               </Slider>
           </div>
       </div>
    );
};

export default SelectedMovie;