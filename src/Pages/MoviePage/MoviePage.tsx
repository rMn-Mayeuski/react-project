import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../types/types";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setMovieAction} from "../../store/reducer/movieReducer";
import {getMovieCard} from "../../store/asyncActions/movieActions";
import Loading from '../../components/common/Loading/Loading';
import SelectedMovie from '../../components/common/MoviesList/SelectedMovie/SelectedMovie';

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
    }
    else {
        return <Loading/>
    }
};

export default MoviePage;