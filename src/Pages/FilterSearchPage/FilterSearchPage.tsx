import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import SearchServicesByFilters from '../../services/searchServiceByFilters';
import { IMovie } from '../../types/types';

const FilterSearchPage: FC = () => {

    const { search } = useLocation();
    const query = search.split("?search=")[1];
    const country = "Россия"
    const genre = "драма"
    const rating = "1-10"
    const year = "1990-2022"

    const [ filterMatches, setFilterMatches ] = useState<IMovie[]>([]);

    const handleFilterSearch = async () => {

        const { docs } = await SearchServicesByFilters.getSearchResults(query, country, genre, rating, year, 10)

        console.log(docs);

        if (Array.isArray(docs)) {
            setFilterMatches(docs)
        }
    }

    useEffect( () => {
        console.log(query);
        handleFilterSearch()
    }, [search])

    return (
        <>
            <MoviesList movies={filterMatches}/>
        </>
    );
};

export default FilterSearchPage;