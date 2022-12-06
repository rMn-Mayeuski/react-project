import React, { FC } from 'react';
import Select from 'react-select';
import "./CountrySelect.scss"

interface ICountrySelect{
    countrySelectValue: any
    countrySelectOnChange: any
    countrySelectOptions: any
}

const CountrySelect: FC<ICountrySelect> = ({
    countrySelectValue, 
    countrySelectOnChange, 
    countrySelectOptions }) => {

    return (
        <Select
            classNamePrefix="country-select"
            placeholder="Выберите страну"
            onChange={countrySelectOnChange}
            value={countrySelectValue}
            options={countrySelectOptions}
            isSearchable={true}
        />
    );};
    
    export default CountrySelect;