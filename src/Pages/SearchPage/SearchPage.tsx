import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import ShowMoreButton from '../../components/common/ShowMoreButton/ShowMoreButton';
import SearchServices from '../../services/searchServices';
import { setIsLoadingAction } from '../../store/reducer/moviesReducer';
import { IMovie } from '../../types/types';

const SearchPage: FC = () => {

    const text = 'По вашему запросу ничего не найдено. Проверьте корректность введенных данных.';

    const dispatch = useDispatch();

    function decodeUTF8(s: string) {
        return decodeURIComponent(s);
    }

    const { isLoading } = useSelector((state: any) => state.movieCards);

    const { search } = useLocation();

    const query = search.split("?search=")[1];

    const [previousQuery, setPreviousQuery] = useState(query);
    
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    const [newPage, setNewPage] = useState(1);

    const [ matches, setMatches ] = useState<IMovie[]>([]);

    const [ newMatches, setNewMatches ] = useState<IMovie[]>([]);

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleChangeNewPage = () => {
        setNewPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoadingAction(payload))
    }

    const Search = async () => {
        if (previousQuery === query) {
            handleSearch()
        } else {
            handleSecondSearch()
        }
    }

    const handleSearch = async () => {
        handleIsLoading(true)
        
        const { docs, pages } = await SearchServices.getSearchResults(query, 10, page);
        setPages(pages!)
        setMatches(matches.concat(docs))

        handleIsLoading(false)
    }

    const handleSecondSearch = async () => {
        handleIsLoading(true)
        
        const { secondDocs, pages } = await SearchServices.getSecondSearchResults(previousQuery, 10, page);
        setPages(pages!)
        setNewMatches(newMatches.concat(secondDocs))
        
        handleIsLoading(false)
    }

    useEffect( () => {
        Search()
    }, [query, previousQuery, page, newPage])

    return (
        <>
            {matches.length > 0
                ? 
            <>
            {newMatches.length > 0
                ? 
                    <>
                        <MoviesList movies={newMatches}/>
                        {pages > page && <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>}
                    </>
                : 
                    <>
                        <MoviesList movies={matches}/>
                        {pages > page && <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>}
                    </>
            }
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