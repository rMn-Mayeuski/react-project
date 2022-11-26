import { ChangeEvent, MouseEventHandler, useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterSearchContext";
import { IWithChildren } from "../types/types";
import * as genreConstants from "../constants/allGenre"
import * as countryConstants from "../constants/allCountries"
import { SORTBTNS_CONFIG } from "../types/configs";

export const useFilter = () => useContext(FilterContext)

export const SearchFilterProvider = ({ children, ...props}: IWithChildren) => {

    const [currentCountries, setCurrentCountries] = useState<string>("США");

    const countryGetValue = () => {
        return currentCountries 
            ? countryConstants.options.find(country => country.value === currentCountries)
            : ""
    }

    // console.log(currentCountries);
        
    const countryOnChange = (newValue: any) => {
        setCurrentCountries(newValue.value)
    }

    const [currentGenre, setCurrentGenre] = useState<string>("приключения");

    const genreGetValue = () => {
        return currentGenre 
            ? genreConstants.options.find(genre => genre.value === currentGenre)
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

    const [activeTabItem, setActiveTabItem] = useState<number>(SORTBTNS_CONFIG[0].id);
    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const filterPosts = () => {
        switch (activeTabItem) {
            case 2:
                return
            default:
        }
    }

    // console.log(activeTabItem);

    useEffect(() => {
        filterPosts()
    }, [activeTabItem])

    return (
        <FilterContext.Provider value={{
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
        }}
        {...props}
        >
            {children}
        </FilterContext.Provider>
    )
}