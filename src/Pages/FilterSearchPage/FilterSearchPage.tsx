import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie } from '../../types/types';
import { useFilter } from '../../provider/SearchFilterProvider';
import SearchServicesByFilters from '../../services/searchServiceByFilters';
import MoviesList from '../../components/common/MoviesList/MoviesList';
import NotFound from '../../components/common/NotFoundMessage/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/reducers/moviesReducer';
import ShowMoreButton from '../../components/common/ShowMoreButton/ShowMoreButton';

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

    const [page, setPage] = useState(1);

    const handleChangePage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handleIsLoading = (payload: boolean) => {
        dispatch(setIsLoading(payload))
    }

    const handleFilterSearch = async () => {
        handleIsLoading(true)

        const { docs } = await SearchServicesByFilters.getSearchResults(query, country, genre , ratingFrom, ratingTo, yearFrom, yearTo, sortBy, 10 )

        console.log(docs);

        setFilterMatches(filterMatches.concat(docs))

        handleIsLoading(false)
    }

    useEffect( () => {
        handleFilterSearch()
    }, [search, page])

    return (
        <>
            {filterMatches.length > 0
                ?
            <>
                <MoviesList movies={filterMatches}/>
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

export default FilterSearchPage;