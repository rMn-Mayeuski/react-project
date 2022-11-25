import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie } from '../../types/types';
import { useFilter } from '../../provider/SearchFilterProvider';
import SearchServicesByFilters from '../../services/searchServiceByFilters';
import MoviesList from '../../components/common/MoviesList/MoviesList';

const FilterSearchPage: FC = () => {

    const filter = useFilter()

    const { search } = useLocation();
    const query = search.split("?field=name&search=")[1];
    const country = filter?.currentCountries;
    const genre = filter?.currentGenre;
    const yearFrom = filter?.yearFromSearchQuery;
    const yearTo = filter?.yearToSearchQuery;
    const ratingFrom = filter?.ratingFromSearchQuery;
    const ratingTo = filter?.ratingToSearchQuery;
    const sortRating = "-1";
    const sortYear = "-1";

    const [ filterMatches, setFilterMatches ] = useState<IMovie[]>([]);

    const handleFilterSearchRating = async () => {

        const { docs } = await SearchServicesByFilters.getSearchResults(query, country, genre , ratingFrom, ratingTo, yearFrom, yearTo, sortRating, sortYear, 10 )

        console.log(docs);

        if (Array.isArray(docs)) {
            setFilterMatches(docs)
        }
    }

    const handleFilterSearchYear = async () => {

        const { docs } = await SearchServicesByFilters.getSearchResults(query, country, genre , ratingFrom, ratingTo, yearFrom, yearTo, sortRating, sortYear,  10 )

        console.log(docs);

        if (Array.isArray(docs)) {
            setFilterMatches(docs)
        }
    }

    useEffect( () => {
        handleFilterSearchYear()
    }, [search])

    return (
        <>
            <MoviesList movies={filterMatches}/>
        </>
    );
};

export default FilterSearchPage;