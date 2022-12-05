import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import MovieService from '../../services/movieService';
import {IMovie} from '../../types/types';
import {useDispatch, useSelector} from "react-redux";
import ShowMoreButton from "../../components/common/ShowMoreButton/ShowMoreButton";
import MoviesList from "../../components/common/MoviesList/MoviesList";
import Loading from "../../components/common/Loading/Loading";
import { setIsLoading } from '../../store/reducer/moviesReducer';

const MainPage: FC = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: any) => state.movieCards);

    const [limit, setLimit] = useState(0)

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [movies, setMovies] = useState<IMovie[]>([]);

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const getMovies = async () => {
        handleIsLoading(true)

        const { docs, pages, limit } = await MovieService.getMovies(page);
        setLimit(limit!);
        setPages(pages!);
        setMovies(movies.concat(docs))

        handleIsLoading(false)
    }

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
            setLimit(8);
        }
    }, [])

    useEffect(() => {
        getMovies()
    }, [page])

    return (
        <>
            <MoviesList movies={movies}/>
            {
                movies.length === 0
                ?
                <Loading/>
                :
                    (pages > page) && <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
            }
        </>
    );
};

export default MainPage;