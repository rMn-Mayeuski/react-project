import React, { ChangeEvent, FC, FormEvent, MouseEventHandler, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../../../App/AppRoutes/routes';
import Search from './Search/Search';
import SearchFilter from './SearchFilter/SearchFilter';

const RenderSearch: FC = () => {

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

    return (
        <>
            <Search
                name='search'
                value={searchQuery} 
                onSubmit={handleSearch}
                onChange={handleSearchQueryChange}
                onClick={filterMenuActive}
            />
            <SearchFilter
                condition={filterActive}
                onClick={handleClickAway}
            />
        </>
    );
};

export default RenderSearch;