import React, {FC, useEffect, useState} from 'react';
import MovieService from '../../services/movieService';
import { IMovie } from '../../types/types';
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "../../store/reducers/moviesReducer";
import ShowMoreButton from "../../components/common/ShowMoreButton/ShowMoreButton";
import MoviesList from "../../components/common/MoviesList/MoviesList";


const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: any) => state.movieCards);

    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState<IMovie[]>([])

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }
    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const getMovies = async () => {
        handleIsLoading(true)
        const { docs } = await MovieService.getMovies(limit, page);
        setMovies(movies.concat(docs))

        // setTimeout(handleIsLoading, 1000, false)
        handleIsLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [page])

    return (
        <>
            <MoviesList movies={movies}/>
            <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
        </>
    );
};

export default MainPage;