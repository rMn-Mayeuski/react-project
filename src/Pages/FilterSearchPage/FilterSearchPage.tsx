import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie } from '../../types/types';
import { useFilter } from '../../provider/SearchFilterProvider';
import SearchServicesByFilters from '../../services/searchServiceByFilters';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoadingAction } from '../../store/reducer/moviesReducer';

const FilterSearchPage: FC = () => {

    const text = 'По вашему запросу ничего не найдено. Проверьте корректность введенных данных.';

    const filter = useFilter()

    const { search } = useLocation();
    const query = search.split("?field=name&search=")[1];
    const country = filter?.currentCountries;
    const genre = filter?.currentGenre;
    const yearFrom = filter?.yearFromSearchQuery;
    const yearTo = filter?.yearToSearchQuery;
    const ratingFrom = filter?.ratingFromSearchQuery;
    const ratingTo = filter?.ratingToSearchQuery;
    const sortBy = filter?.activeTabItem === 1 ? "sortField=rating.kp&sortType=-1" : "sortField=year&sortType=-1" ;

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: any) => state.movieCards);

    const [ filterMatches, setFilterMatches ] = useState<IMovie[]>([]);

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoadingAction(payload))
    }

    const handleFilterSearch = async () => {
        handleIsLoading(true)

        const { docs } = await SearchServicesByFilters.getSearchResults(query, country, genre , ratingFrom, ratingTo, yearFrom, yearTo, sortBy, 20 )

        console.log(docs);

        setFilterMatches(docs)

        handleIsLoading(false)
    }

    function decode_utf8(s: string) {
        return decodeURIComponent(s);
    }

    useEffect( () => {
        handleFilterSearch()
    }, [search])

    return (
        <>
            {filterMatches.length > 0
                ?
            <>
                <MoviesList movies={filterMatches}/>
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

export default FilterSearchPage;