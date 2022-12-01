import React, { FC, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/common/Loading/Loading';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import SearchServices from '../../services/searchServices';
import { setIsLoading } from '../../store/reducers/moviesReducer';
import { IMovie } from '../../types/types';

const MoviesList = React.lazy(() => import("../../components/common/MoviesList/MoviesList"));
const ShowMoreButton = React.lazy(() => import("../../components/common/ShowMoreButton/ShowMoreButton"));

const SearchPage: FC = () => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: any) => state.movieCards);

    const { search } = useLocation();
    const query = search.split("?search=")[1];

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    const [ matches, setMatches ] = useState<IMovie[]>([]);

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const handleSearch = async () => {
        handleIsLoading(true)
        const { docs } = await SearchServices.getSearchResults(query, limit, page)

        console.log(docs);

        setMatches(matches.concat(docs))

        handleIsLoading(false)
    }

    useEffect( () => {
        // console.log(query);
        handleSearch()
    }, [search, page])

    return (
        <>
            {!!matches.length 
                ? 
            <Suspense fallback={<Loading/>}>
                <MoviesList movies={matches}/>
                <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
            </Suspense>
                : 
            <NotFound/>
            }
        </>
    );
};

export default SearchPage;