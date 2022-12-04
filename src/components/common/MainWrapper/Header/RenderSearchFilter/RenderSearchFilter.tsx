import React, { FC } from 'react';
import { useFilter } from '../../../../../provider/SearchFilterProvider';
import * as countryConstants from "../../../../../constants/allCountries"
import * as genreConstants from "../../../../../constants/allGenre"
import SearchFilter from './SearchFilter/SearchFilter';

const RenderSearchFilter: FC = () => {

    const filter = useFilter();

    return (
            <SearchFilter
                value={filter?.filterSearchQuery}
                formSubmit={filter?.handleFilterSearch}
                filterSearchChange={filter?.handleFilterSearchQueryChange}
                condition={filter?.filterActive}
                onClick={filter?.handleClickAway}

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

                resetForm={filter?.resetForm}
            />
    );
};

export default RenderSearchFilter;