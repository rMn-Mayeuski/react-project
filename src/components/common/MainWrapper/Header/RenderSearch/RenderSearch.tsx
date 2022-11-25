import React, { ChangeEvent, FC, FormEvent, MouseEventHandler, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../../../App/AppRoutes/routes';
import Search from './Search/Search';
import SearchFilter from './SearchFilter/SearchFilter';
import * as countryConstants from "../../../../../constants/allCountries"
import * as genreConstants from "../../../../../constants/allGenre"
import { useFilter } from '../../../../../provider/SearchFilterProvider';

const RenderSearch: FC = () => {

    const filter = useFilter()

    const [filterActive, setFilterActive] = useState(false);

    const filterMenuActive = () => setFilterActive(!filterActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            filterMenuActive()
        }
    }

    const [ searchQuery, setSearchQuery ] = useState<string>( "" );

    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate( `${Routes.search}?search=${searchQuery}` );
        setSearchQuery("");
    };

    const [ filterSearchQuery, setfilterSearchQuery ] = useState<string>( "" );

    const handleFilterSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setfilterSearchQuery(event.target.value);
        location.search = `?field=name&search=${event.target.value}`
    }

    const handleFilterSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate( `${Routes.filterSearch}?field=name&search=${filterSearchQuery}` );
        setfilterSearchQuery("");
    };

    const resetForm = () => {
        setfilterSearchQuery("");
        filter?.setYearFromSearchQuery("1000")
        filter?.setYearToSearchQuery("3000")
        filter?.setRatingFromSearchQuery("1")
        filter?.setRatingToSearchQuery("10")
    }

    return (
        <>
            <Search
                value={searchQuery} 
                onSubmit={handleSearch}
                onChange={handleSearchQueryChange}
                onClick={filterMenuActive}
            />
            <SearchFilter
                value={filterSearchQuery}
                formSubmit={handleFilterSearch}
                filterSearchChange={handleFilterSearchQueryChange}
                condition={filterActive}
                onClick={handleClickAway}

                countrySelectOnChange={filter?.countryOnChange}
                countrySelectValue={filter?.countryGetValue()}
                countrySelectOptions={countryConstants.options}

                genreSelectOnChange={filter?.genreOnChange}
                genreSelectValue={filter?.genreGetValue()}
                genreSelectOptions={genreConstants.options}

                yearFromValue={filter?.yearFromSearchQuery}
                yearFromChange={filter?.handleYearFromSearchQueryChange}

                yearToValue={filter?.yearToSearchQuery}
                yearToChange={filter?.handleYearToSearchQueryChange}

                ratingFromValue={filter?.ratingFromSearchQuery}
                ratingFromChange={filter?.handleRatingFromSearchQueryChange}

                ratingToValue={filter?.ratingToSearchQuery}
                ratingToChange={filter?.handleRatingToSearchQueryChange}

                resetForm={resetForm}
            />
        </>
    );
};

export default RenderSearch;