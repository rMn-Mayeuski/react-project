import React, { FC, useState } from 'react';
import Select from 'react-select';
import * as constants from "../../../../../../../constants/allCountries"
import { IMovie } from '../../../../../../../types/types';
import "./CountrySelect.scss"
    
    const isMulti = true;
    
    const CountrySelect: FC = ({countries}: IMovie) => {

        const [currentCountries, setCurrentCountries] = useState<any>([]);

        const getValue = () => {
            return currentCountries 
                ? constants.options.filter(c => currentCountries.indexOf(c.value) >= 0) 
                : []
        }
    
        const onChange = (newValue: any) => {
            setCurrentCountries(isMulti ? newValue.map((v:any) => v.value) : newValue.value)
        }

        return (
            <Select
            classNamePrefix="country-select"
            placeholder="Выберите страну"
            onChange={onChange}
            value={getValue()}
            options={constants.options}
            isSearchable={true}
            isMulti
        />
        );
    };
    
    export default CountrySelect;