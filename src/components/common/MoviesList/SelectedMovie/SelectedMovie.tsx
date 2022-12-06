import React, {FC} from 'react';
import {IMovie, IMovieSimilar} from "../../../../types/types";
import SelectedMovieElements from "./SelectedMovieElements/SelectedMovieElements";
import posterNotFound from "../../../../assets/img/PosterNotFound.jpg"
import styles from "./SelectedMovie.module.scss";
import Genres from '../Movie/Genres/Genres';
import Rating, {RatingVariant} from '../Movie/Rating/Rating';
import Slider from "../../Slider/Slider";
import {SwiperSlide} from "swiper/react";
import Movie from "../Movie/Movie";
import FavoriteButton, {FavoriteButtonVariant} from "../../FavoriteButton/FavoriteButton";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import ShareButton from "../../ShareButton/ShareButton";

interface SelectedMovieProps {
    movie: IMovie
}

const SelectedMovie: FC<SelectedMovieProps> = ({movie}) => {
    const navigate = useNavigate();
    const handleMoviePageOpen = () => navigate(`/home/${movie?.id}`)

    const { id = 1 } = useParams();
    const { favorites } = useSelector((state: any) => state.favorites)
    const selectedMovie = favorites.find((movie: IMovie) => movie.id === +id)

    const similars = movie.similarMovies?.filter((item: IMovieSimilar) =>
        item.name?.length ? item : undefined
    );
   
  return (
       <>
           <div className={styles.movieTopBlock}>
               <div className={styles.movieLeftSide}>
                   <img src={movie.poster?.url ? movie.poster?.url : posterNotFound} alt="img"/>
                   <div className={styles.movieActionButtons}>
                       <FavoriteButton variant={FavoriteButtonVariant.forMoviePage} movie={!!selectedMovie ? selectedMovie : movie}/>
                       <ShareButton/>
                   </div>
               </div>
               <div className={styles.movieRightSide}>
                   <Genres {...movie}/>
                   <h1 className={styles.movieTitle}>{!!movie.name ? movie.name : movie.alternativeName}</h1>
                   <h2 className={styles.movieSubtitle}>{!!movie.name && movie.alternativeName}</h2>
                   <div className={styles.movieMarkers}>
                       {!!movie.rating?.kp && <Rating variant={RatingVariant.kp} {...movie}/>}
                       {!!movie.rating?.imdb && <Rating variant={RatingVariant.imdb} {...movie}/>}
                       {!!movie.movieLength && <div className={styles.movieRuntime}>{`${movie.movieLength} min`}</div>}
                   </div>
                   {!!movie.description && <p className={styles.movieDescription}>{movie.description}</p>}
                   <SelectedMovieElements movie={movie}/>
               </div>
           </div>
           <div>
               {!!similars?.length &&
                   <Slider>
                       {similars?.map((elem) => (
                           <SwiperSlide key={elem.id}>
                               <Movie movie={elem} key={elem.id} onClick={handleMoviePageOpen}/>
                           </SwiperSlide>
                       ))}
                   </Slider>
               }
           </div>
       </>
    );
};

export default SelectedMovie;