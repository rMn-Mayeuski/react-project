import React, {FC, useEffect, Suspense, useState, useMemo, useCallback} from 'react';
import MovieService from '../../services/movieService';
import { IMovie } from '../../types/types';
import {useDispatch, useSelector} from "react-redux";
import {setClearMovies, setIsLoading, setPageAction, setShowMoreMovies} from "../../store/reducers/moviesReducer";



import ShowMoreButton from "../../components/common/ShowMoreButton/ShowMoreButton";
import MoviesList from "../../components/common/MoviesList/MoviesList";
import {Routes} from "../../components/App/AppRoutes/routes";
import {useMatch} from "react-router-dom";



const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { movieCards, page,  isLoading } = useSelector((state: any) => state.movieCards);

    const isHomePage = useMatch(Routes.home);

    const [limit, setLimit] = useState(10)

    const setReduxMovies = (payload: IMovie[]) => {
        dispatch(setShowMoreMovies(payload))
    }

    const handleShowMoreCLick = () => {
        dispatch(setPageAction(page))
    }
    // const handleCreateNextPage = (payload: boolean) => {
    //     dispatch(setPageAction(payload))
    // }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const handleClearMovies = () => {
        dispatch(setClearMovies([]))
    }

    const getMovies = async () => {
        handleIsLoading(true)
        const { docs } = await MovieService.getMovies(limit, page);
        if (isHomePage) {
            handleClearMovies()
        }
        setReduxMovies(docs)


        // setTimeout(handleIsLoading, 1000, false)
        handleIsLoading(false)
    }

    useEffect(() => {
        getMovies();

    }, [page])


    return (
        <>
            <MoviesList movies={movieCards}/>
            <ShowMoreButton onClick={handleShowMoreCLick} isLoading={isLoading}/>
        </>
    );
};

export default MainPage;