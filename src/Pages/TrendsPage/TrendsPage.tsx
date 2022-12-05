import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IMovie} from "../../types/types";
import MovieService from "../../services/movieService";
import MoviesList from "../../components/common/MoviesList/MoviesList";
import ShowMoreButton from "../../components/common/ShowMoreButton/ShowMoreButton";
import { setIsLoading } from '../../store/reducer/moviesReducer';
import Loading from "../../components/common/Loading/Loading";

const TrendsPage: FC = () => {
    const { isLoading } = useSelector((state: any) => state.movieCards);
    const dispatch = useDispatch();

    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [trends, setTrends] = useState<IMovie[]>([])

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const getTrends = async () => {
        handleIsLoading(true)

        const { docs } = await MovieService.getTrendMovies(limit, page);
        setTrends(trends.concat(docs))

        handleIsLoading(false)
    }

    useEffect(() => {
        getTrends()
    }, [page])

    return (
        <>
            <MoviesList movies={trends}/>
            {
                trends.length === 0
                    ?
                    <Loading/>
                    :
                    <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
            }
        </>
    );
};

export default TrendsPage;