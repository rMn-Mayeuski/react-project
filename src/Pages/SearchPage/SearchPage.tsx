import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import ShowMoreButton from '../../components/common/ShowMoreButton/ShowMoreButton';
import SearchServices from '../../services/searchServices';
import { setIsLoading } from '../../store/reducer/moviesReducer';
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
        dispatch(setIsLoading(payload))
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
        
        const { docs } = await SearchServices.getSearchResults(query, 10, page);

        console.log(docs);
        
        setMatches(matches.concat(docs))

        handleIsLoading(false)
    }

    const handleSecondSearch = async () => {
        handleIsLoading(true)
        
        const { secondDocs } = await SearchServices.getSecondSearchResults(previousQuery, 10, page);

        console.log(secondDocs);

        setNewMatches(newMatches.concat(secondDocs))
        
        handleIsLoading(false)
    }

    console.log(matches);
    console.log(newMatches);
    console.log(decodeUTF8(query));
    console.log(decodeUTF8(previousQuery));

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
                        <ShowMoreButton onClick={handleChangeNewPage} isLoading={isLoading}/>
                    </>
                : 
                    <>
                        <MoviesList movies={matches}/>
                        <ShowMoreButton onClick={handleChangePage} isLoading={isLoading}/>
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