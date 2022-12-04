import React, { FC, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../components/App/AppRoutes/routes';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import ShowMoreButton from '../../components/common/ShowMoreButton/ShowMoreButton';
import SearchServices from '../../services/searchServices';
import { setIsLoading } from '../../store/reducers/moviesReducer';
import { IMovie } from '../../types/types';

const SearchPage: FC = () => {

    const text = 'По вашему запросу ничего не найдено. Проверьте корректность введенных данных.';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function decodeUTF8(s: string) {
        return decodeURIComponent(s);
    }

    const { isLoading } = useSelector((state: any) => state.movieCards);

    const { search } = useLocation();

    const query = search.split("?search=")[1];

    const [previousQuery, setPreviousQuery] = useState(query);

    console.log(decodeUTF8(previousQuery));
    
    const [page, setPage] = useState(1);

    const [ matches, setMatches ] = useState<IMovie[]>([]);

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }
    console.log(decodeUTF8(query));

    const handleSearch = async () => {
        handleIsLoading(true)
        
        const { docs } = await SearchServices.getSearchResults(query, 10, page);

        console.log(docs);
        
        query !== previousQuery ? matches.length=0  : setMatches(matches.concat(docs))

        setMatches(matches.concat(docs))

        handleIsLoading(false)
    }

    useEffect( () => {
        handleSearch()
    }, [query, page])

    return (
        <>
            {matches.length > 0
                ? 
            <>
                <MoviesList movies={matches}/>
                <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
            </>
                :
            <NotFound 
                text={text}
                isLoading={isLoading}
            /> 
            }
        </>
    );
};

export default SearchPage;