import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import searchServices from '../../services/searchServices';
import { IMovie } from '../../types/types';


const SearchPage: FC = () => {

    const { search } = useLocation();
    const query = search.split("?search=")[1];

    const [ mathes, setMatches ] = useState<IMovie[]>([]);

    const hadleSearch = async () => {
        const { docs } = await searchServices.getSearchResults(query, 10)

        console.log(docs);

        if (Array.isArray(docs)) {
            setMatches(docs)
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