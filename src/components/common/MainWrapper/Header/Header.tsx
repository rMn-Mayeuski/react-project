import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from "./Header.module.scss"
import logo from "../../../../assets/Logo.svg"
import Search from './Search/Search';
import UserInfo from './UserInfo/UserInfo';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../../../App/AppRoutes/Routes';

const Header: FC = () => {

    const [ searchQuery, setSearchQuery ] = useState<string>( "" );
    // const [ searchQueryDirty, setSearchQueryDirty ] = useState<boolean>( false );
    // const [ searchQueryError, setSearchQueryError ] = useState<string>( "Please enter the correct value" );
    // const [ searchQueryValid, setSearchQueryValid ] = useState<boolean>( false );
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     if (searchQueryError) {
    //         setSearchQueryValid(false)
    //     } else {
    //         setSearchQueryValid(true)
    //     }
    // }, [searchQueryError])

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        // const reg = /[a-z]/i 
        location.search = `?search=${event.target.value}`
        // if (!reg.test(String(event.target.value).toLowerCase())) {
        //     setSearchQueryError("Incorrect value")
        // } if (event.target.value.length < 3) {
        //     setSearchQueryError("Incorrect value")
        // }
        // else {
        //     setSearchQueryError("")
        // }
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate( `${Routes.search}?search=${searchQuery}` );
        setSearchQuery("");
    };

    // const blurHandler = (event:any) => {
    //     switch (event.target.name) {
    //         case "search":
    //             setSearchQueryDirty(true)
    //     }
    // }

    return (
        <header className={styles.header}>
            <NavLink to={"/home"}>
                <img src={logo} alt="Logo" />
            </NavLink>
            <Search
                name='search'
                // onBlur={blurHandler}
                value={searchQuery} 
                onSubmit={handleSearch}
                onChange={handleSearchQueryChange}
            />
            {/* {(searchQueryDirty && searchQueryError) 
                && 
                <p className={styles.headerError}>
                    {searchQueryError}
                </p>} */}
            <UserInfo/>
            <BurgerMenu/>
        </header>
    );
};

export default Header;