import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import searchServices from '../../services/searchServices';
import { IMovie } from '../../types/types';


const SearchPage: FC = () => {

    const { search } = useLocation();
    const query = search.split("?search=")[1];

    const [ mathes, setMatches ] = useState<IMovie[]>([]);

    const hadleSearch = async () => {
        const { Search } = await searchServices.getSearchResults(query)

        console.log(Search);

        if (Array.isArray(Search)) {
            setMatches(Search)
        }
    }

    useEffect( () => {
        console.log(query);
        hadleSearch()
    }, [search])

    return (
        <> 
            <MoviesList movies={mathes}/>
        </>
    );
};

export default SearchPage;