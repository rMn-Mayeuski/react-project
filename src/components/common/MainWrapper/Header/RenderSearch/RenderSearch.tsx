import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../../../App/AppRoutes/routes';
import Search from './Search/Search';

import { useFilter } from '../../../../../provider/SearchFilterProvider';

const RenderSearch: FC = () => {

    const filter = useFilter()
    const navigate = useNavigate();
    const location = useLocation();

    const [ searchQuery, setSearchQuery ] = useState<string>( "" );

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate( `${Routes.search}?search=${searchQuery}` );
        window.location.reload();
        setSearchQuery("");
    };

    return (
        <>
            <Search
                name='search'
                value={searchQuery} 
                onSubmit={handleSearch}
                onChange={handleSearchQueryChange}
                onClick={filter?.filterMenuActive}
            />
        </>
    );
};

export default RenderSearch;