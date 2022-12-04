import { createContext } from "react";

export interface IFilterContext{
    filterMenuActive: any,
    filterSearchQuery: any,
    handleFilterSearch: any,
    handleFilterSearchQueryChange: any,
    filterActive: any,
    handleClickAway: any,
    resetForm: any,
    activeTabItem: any,
    handleSetActiveTabItem: any,
    currentCountries: any,
    countryOnChange: any,
    countryGetValue: any,
    currentGenre: any,
    genreOnChange: any,
    genreGetValue: any,
    yearFromSearchQuery: any,
    handleYearFromSearchQueryChange: any,
    yearToSearchQuery: any,
    handleYearToSearchQueryChange: any,
    ratingFromSearchQuery: any,
    handleRatingFromSearchQueryChange: any,
    ratingToSearchQuery: any,
    handleRatingToSearchQueryChange: any,
    setYearFromSearchQuery: any,
    setYearToSearchQuery: any,
    setRatingFromSearchQuery: any,
    setRatingToSearchQuery: any,
}

export const FilterContext = createContext<IFilterContext | null>(null)