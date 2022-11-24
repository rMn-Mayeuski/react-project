import React, { FC, useEffect, useState } from 'react';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import MovieService from '../../services/movieService';
import { IMovie } from '../../types/types';
import {useDispatch, useSelector} from "react-redux";
import {setMoviesAction, setPageAction, setShowMoreMovies} from "../../store/reducers/moviesReducer";

import styles from "./MainPage.module.scss";



const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { movieCards, page } = useSelector((state: any) => state.movieCards);

    const setReduxMovies = (payload: IMovie[]) => {
        dispatch(setShowMoreMovies(payload))
    }

    const handleShowMoreCLick = () => {
        dispatch(setPageAction(page))
    }

    const getMovies = async () => {
        const { docs } = await MovieService.getMovies(10, page);


        return setReduxMovies(docs)
    }

    useEffect(() => {
        getMovies()
    }, [page])

    return (
        <>
            <MoviesList movies={movieCards}/>
            <button onClick={handleShowMoreCLick}>Show More</button>
        </>
    );
};

export default MainPage;