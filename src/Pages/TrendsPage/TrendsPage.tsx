import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IMovie} from "../../types/types";
import MovieService from "../../services/movieService";
import MoviesList from "../../components/common/MoviesList/MoviesList";
import ShowMoreButton from "../../components/common/ShowMoreButton/ShowMoreButton";
import { setIsLoading } from '../../store/reducer/moviesReducer';

const TrendsPage: FC = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: any) => state.movieCards);
    const { favorites } = useSelector((state: any) => state.favorites)

    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState<IMovie[]>([])

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    // const setReduxMovies = (payload: IMovie[]) => {
    //     dispatch(setMoviesAction(payload))
    // }

    const getMovies = async () => {
        handleIsLoading(true)

        const { docs } = await MovieService.getTrendMovies(limit, page);
        setMovies(movies.concat(docs))

        // setTimeout(handleIsLoading, 1000, false)
        handleIsLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [page])

    // useEffect(() => {
    //     setMovies(movies)
    // }, [movies])

    return (
        <>
            <MoviesList movies={movies}/>
            <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
        </>
    );
};

export default TrendsPage;