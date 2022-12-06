import { ChangeEvent, FormEvent, MouseEventHandler, useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterSearchContext";
import { IWithChildren } from "../types/types";
import * as genreConstants from "../constants/allGenre"
import * as countryConstants from "../constants/allCountries"
import { SORTBTNS_CONFIG } from "../types/configs";
import { Routes } from "../components/App/AppRoutes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const useFilter = () => useContext(FilterContext)

export const SearchFilterProvider = ({ children, ...props}: IWithChildren) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [filterActive, setFilterActive] = useState(false);

    const filterMenuActive = () => setFilterActive(!filterActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            filterMenuActive()
        }
    }

    const [currentCountries, setCurrentCountries] = useState<string>("США");

    const countryGetValue = () => {
        return currentCountries 
            ? countryConstants.options.find((country: any) => country.value === currentCountries)
            : ""
    }

    // console.log(currentCountries);
        
    const countryOnChange = (newValue: any) => {
        setCurrentCountries(newValue.value)
    }

    const [currentGenre, setCurrentGenre] = useState<string>("приключения");

    const genreGetValue = () => {
        return currentGenre 
            ? genreConstants.options.find((genre: any) => genre.value === currentGenre)
            : ""
    }
    
    // console.log(currentGenre);
    
    const genreOnChange = (newValue: any) => {
        setCurrentGenre(newValue.value)
    }

    const [ yearFromSearchQuery, setYearFromSearchQuery ] = useState<string>( "1000" );

    const handleYearFromSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setYearFromSearchQuery(event.target.value);
    }

    const [ yearToSearchQuery, setYearToSearchQuery ] = useState<string>("3000" );

    const handleYearToSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setYearToSearchQuery(event.target.value);
    }

    const [ ratingFromSearchQuery, setRatingFromSearchQuery ] = useState<string>( "1" );

    const handleRatingFromSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setRatingFromSearchQuery(event.target.value);
    }

    const [ ratingToSearchQuery, setRatingToSearchQuery ] = useState<string>( "10" );

    const handleRatingToSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setRatingToSearchQuery(event.target.value);
    }

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

    const [activeTabItem, setActiveTabItem] = useState<number>(SORTBTNS_CONFIG[0].id);
    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    // console.log(activeTabItem);

    const resetForm = () => {
        setfilterSearchQuery("");
        setYearFromSearchQuery("1000")
        setYearToSearchQuery("3000")
        setRatingFromSearchQuery("1")
        setRatingToSearchQuery("10")
    }

    return (
        <FilterContext.Provider value={{
            filterMenuActive,
            filterSearchQuery,
            handleFilterSearch,
            handleFilterSearchQueryChange,
            filterActive,
            handleClickAway,
            activeTabItem,
            handleSetActiveTabItem,
            currentCountries,
            countryOnChange,
            countryGetValue,
            currentGenre,
            genreOnChange,
            genreGetValue,
            yearFromSearchQuery,
            handleYearFromSearchQueryChange,
            yearToSearchQuery,
            handleYearToSearchQueryChange,
            ratingFromSearchQuery,
            handleRatingFromSearchQueryChange,
            ratingToSearchQuery,
            handleRatingToSearchQueryChange,
            setYearFromSearchQuery,
            setYearToSearchQuery,
            setRatingFromSearchQuery,
            setRatingToSearchQuery,
            resetForm,
        }}
        {...props}
        >
            {children}
        </FilterContext.Provider>
    )
}