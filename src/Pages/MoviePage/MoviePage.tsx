import React, {FC, useEffect, useState} from 'react';
import SelectedMovie from "../../components/common/MoviesList/SelectedMovie/SelectedMovie";
import {IMovie} from "../../types/types";
import MovieService from "../../services/movieService";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieCard} from "../../store/asyncActions/movieActions";
import {setMovieAction} from "../../store/reducers/movieReducer";


const MoviePage: FC = () => {
    const dispatch = useDispatch();
    const {id = 1} = useParams();
    const [movie, setMovie] = useState<IMovie | null>(null);

    const { movieCard } = useSelector((state: any) => state.movieCard)

    const getMovie = async () => {
        await dispatch(getMovieCard(+id))
    }

    useEffect(() => {
        dispatch(setMovieAction(null))
        getMovie()
    }, [id])

    useEffect(() => {
        setMovie(movieCard)
    })
    if (movie) {
        return (
            <>
                <SelectedMovie movie={movie}/>
            </>
        );
    } else {
        return <div>
            loading...
        </div>
    }

};

export default MoviePage;